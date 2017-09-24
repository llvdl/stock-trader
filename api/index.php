<?php

// A very simple (and not secure) backend to store data from the app

require __DIR__ . '/vendor/autoload.php';

use Llvdl\StockTrader\Api\Store;

$app = new \Slim\App([
    'store' => new Store(__DIR__)
]);

include __DIR__ . '/cors.php';

$app->map(['GET', 'PUT'], '/api', function(\Slim\Http\Request $request, \Slim\Http\Response $response) {
    if ($request->getMethod() === 'GET') {
        // get data using GET, returns a json object which may be null if there is no data
        return $response->withJson($this->store->load());
    } else {
        // puts data using PUT, overwriting any previous content
        $this->store->save($request->getParsedBody());

        return $response->withStatus(204);
    }
});

$app->run();

<?php

namespace Llvdl\StockTrader\Api\Tests;

require __DIR__ . '/../vendor/autoload.php';

use PHPUnit\Framework\TestCase;
use Llvdl\StockTrader\Api\Store;

class StoreTest extends TestCase
{
    /** @var Store */
    private $store;

    public function setUp()
    {
        if (is_file(__DIR__ . '/data.txt')) {
            unlink(__DIR__ . '/data.txt');
        }

        $this->store = new Store(__DIR__);
    }

    public function tearDown()
    {
        if (is_file(__DIR__ . '/data.txt')) {
            unlink(__DIR__ . '/data.txt');
        }
    }

    /** @test */
    public function storeLoadReturnsNullIfThereIsNoDataFile()
    {
        $this->assertFalse(is_file(__DIR__ . '/data.txt'));

        $this->assertSame(null, $this->store->load(), 'expecting null since there is no data file');
    }

    /** @test */
    public function storeLoadsData()
    {
        $this->assertFalse(is_file(__DIR__ . '/data.txt'));

        file_put_contents(__DIR__ . '/data.txt', '{"test": 42, "items": [1,2,3]}');

        $data = $this->store->load();

        $this->assertSame(['test' => 42, 'items' => [1,2,3]], $data, 'data correctly loaded');
    }

    /** @test */
    public function storeSavesData()
    {
        $this->store->save(['answer' => 42]);

        $data = json_decode(file_get_contents(__DIR__ . '/data.txt'), true);

        $this->assertSame(['answer' => 42], $data, 'data stored in file');
    }

    /** @test */
    public function storingDataOverwritesPreviousData()
    {
        $this->store->save(['answer' => 42]);
        $this->store->save(['answer' => 43]);

        $data = json_decode(file_get_contents(__DIR__ . '/data.txt'), true);

        $this->assertSame(['answer' => 43], $data, 'data stored in file');
    }
}

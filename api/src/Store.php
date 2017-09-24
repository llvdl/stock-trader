<?php

namespace Llvdl\StockTrader\Api;

class Store
{
    const FILE = 'data.txt';

    /** @var string */
    private $directory;

    public function __construct(string $directory)
    {
        $this->directory = $directory;
    }

    /** @return array|null */
    public function load()
    {
        $path = $this->getDataFilePath();

        return is_file($path) ? json_decode(file_get_contents($path), true) : null;
    }

    public function save(array $data)
    {
        file_put_contents($this->getDataFilePath(), json_encode($data));
    }

    private function getDataFilePath(): string
    {
        return sprintf('%s/%s', $this->directory, self::FILE);
    }
}

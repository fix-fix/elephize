<?php
/* NOTICE: autogenerated file; Do not edit by hand */
namespace VK\Elephize\src\__tests__\specimens\arrayMethods;
use VK\Elephize\Builtins\Stdlib;
use VK\Elephize\Builtins\CJSModule;

class SliceModule extends CJSModule {
    /**
     * @var SliceModule $_mod
     */
    private static $_mod;
    public static function getInstance(): SliceModule {
        if (!self::$_mod) {
            self::$_mod = new SliceModule();
        }
        return self::$_mod;
    }

    /**
     * @var array $a_sl
     */
    public $a_sl;
    /**
     * @var array $b_sl
     */
    public $b_sl;
    /**
     * @var array $c_sl
     */
    public $c_sl;
    /**
     * @var array $d_sl
     */
    public $d_sl;

    private function __construct() {
        $this->a_sl = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        $this->b_sl = Stdlib::arraySlice($this->a_sl, 0);
        $this->c_sl = Stdlib::arraySlice($this->a_sl, 1);
        $this->d_sl = Stdlib::arraySlice($this->a_sl, 1, 2);
        \VK\Elephize\Builtins\Console::log($this->b_sl, $this->c_sl, $this->d_sl);
    }
}

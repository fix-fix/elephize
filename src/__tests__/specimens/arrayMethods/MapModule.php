<?php
/* NOTICE: autogenerated file; Do not edit by hand */
namespace specimens\arrayMethods;
use VK\Elephize\Builtins\Stdlib;
use VK\Elephize\Builtins\CJSModule;

class MapModule extends CJSModule {
    /**
     * @var MapModule $_mod
     */
    private static $_mod;
    public static function getInstance(): MapModule {
        if (!self::$_mod) {
            self::$_mod = new MapModule();
        }
        return self::$_mod;
    }

    /**
     * @var float[] $am
     */
    public $am;
    /**
     * @var float[] $bm
     */
    public $bm;
    /**
     * @var float[] $cm
     */
    public $cm;
    /**
     * @var float[] $dm
     */
    public $dm;
    /**
     * @var float[] $em
     */
    public $em;
    /**
     * @var float $fmc
     */
    public $fmc;
    /**
     * @var float[] $fm
     */
    public $fm;
    /**
     * @var float $gmc
     */
    public $gmc;
    /**
     * @var float[] $gm
     */
    public $gm;

    private function __construct() {
        $this->am = [1, 2, 3];
        $this->bm = Stdlib::arrayMap1(
            $this->am,
            /* anon_01790d2 */ function ($el) {
                return $el * 2;
            }
        );
        $this->cm = Stdlib::arrayMap2(
            $this->am,
            /* anon_2edff3e */ function ($el, $idx) {
                return $el * $idx;
            }
        );
        $this->dm = Stdlib::arrayMap1(
            $this->am,
            /* anon_052c5e1 */ function ($el) {
                return $el * $this->am[0];
            }
        );
        $this->em = Stdlib::arrayMap2(
            $this->am,
            /* anon_7b32ec5 */ function ($el, $idx) {
                $this->am[$idx] = $el * $this->am[$idx];
                return $el;
            }
        );
        $this->fmc = 0;
        $this->fm = Stdlib::arrayMap1(
            $this->am,
            /* anon_2e26e33 */ function ($el) {
                $this->fmc += 1;
                $this->fmc++;
                --$this->fmc;
                return $el * $this->am[0];
            }
        );
        $this->gmc = 0;
        $this->gm = Stdlib::arrayMap1(
            $this->am,
            /* anon_6ba598d */ function ($el) {
                $this->gmc = $el + 4;
                return $el * $this->am[0];
            }
        );
        \VK\Elephize\Builtins\Console::log(
            $this->bm,
            $this->cm,
            $this->dm,
            $this->em,
            $this->fm,
            $this->fmc,
            $this->gm,
            $this->gmc
        );
    }
}

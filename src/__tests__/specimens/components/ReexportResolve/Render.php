<?php
/* NOTICE: autogenerated file; Do not edit by hand */
namespace specimens\components\ReexportResolve;
use VK\Elephize\Builtins\RenderableComponent;
use VK\Elephize\Builtins\Stdlib;

class Render extends RenderableComponent {
    /**
     * @var Render $_mod
     */
    private static $_mod;
    public static function getInstance(): Render {
        if (!self::$_mod) {
            self::$_mod = new Render();
        }
        return self::$_mod;
    }

    private function __construct() {
    }

    /**
     * @param mixed[] $props
     * @param mixed[] $children
     * @return ?string
     */
    public function render(array $props, array $children) {
        \specimens\components\PathResolve\HelpersModule::getInstance()->getFoo();
        \specimens\components\PathResolve\PathResolveModule::getInstance()->getBar();
        \VK\Elephize\Builtins\Console::log(
            \specimens\components\PathResolve\PathResolveModule::getInstance()->SOME_CONST
        );
        return $this->frg([
            \specimens\components\PathResolveReact\index\ReactPathResolveModule::getInstance()->render([], []),
            \specimens\components\PathResolveReact\ComponentModule::getInstance()->render([], []),
            \specimens\components\PathResolveReact\ComponentModule::getInstance()->render([], []),
            \specimens\components\PathResolveReact\ComponentModule::getInstance()->render([], []),
        ]);
    }
}

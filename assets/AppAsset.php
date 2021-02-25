<?php

/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\bootstrap4\BootstrapPluginAsset;
use yii\web\AssetBundle;
use yii\web\JqueryAsset;

/**
 * Main application asset bundle.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback",
        "plugins/fontawesome-free/css/all.min.css",
        "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css",
        "dist/css/adminlte.min.css",
    ];
    public $js = [
        "dist/js/adminlte.js",
    ];
    public $depends = [
        'yii\web\YiiAsset',
        JqueryAsset::class,
        BootstrapPluginAsset::class,
    ];
}

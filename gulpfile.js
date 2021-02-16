var elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;

var gulp = require('gulp');

elixir(function (mix) {
    //compile sass to css
    mix.sass('resources/assets/sass/app.scss', 'resources/assets/css');

    //combine all css files
    mix.styles(
        [
            'css/app.css',
            'bower/vendor/slick-carousal/slick/slick.css'

        ],'public/css/all.css',//output file
        'resources/assets');

        var bowerPath = 'bower/vendor';

        mix.scripts(
        [
            //jquery
            bowerPath + '/jquery/dist/jquery.min.js',

            //foundation js
            bowerPath + '/foundation-sites/js/foundation.min.js',

            //other dependencies
            bowerPath + '/slick-carousal/slick/slick.min.js'
        ],'public/js/all.js', 'resources/assets'
        );
});
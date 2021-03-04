var elixir = require('laravel-elixir');

//tell elixir to not compile sourcemap
elixir.config.sourcemaps = false;

var gulp = require('gulp');

elixir(function (mix) {

    //compile sass to css
    mix.sass('resources/assets/sass/app.scss', 'resources/assets/css');

    //combine all css files
    mix.styles(
        [
            'css/app.css', //creates 'css' destination folder for the file
            'bower/vendor/slick-carousal/slick/slick.css'

        ],'public/css/all.css',//output file
        'resources/assets');

    var bowerPath = 'bower/vendor';

    mix.scripts(
    [
        //jquery
        bowerPath + '/jquery/dist/jquery.min.js',

        //foundation js
        bowerPath + '/foundation-sites/dist/js/foundation.min.js',

        //other dependencies
        bowerPath + '/slick-carousal/slick/slick.min.js'
    ],'public/js/all.js', 'resources/assets' //create ouput file, location of files to be combined
    );
});
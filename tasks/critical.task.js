var gulp    = require('gulp');
var compile = require('laravel-elixir/tasks/shared/Css');
var _ = require('underscore');
var Elixir = require('laravel-elixir');

var config = Elixir.config;

/*
 |----------------------------------------------------------------
 | Sass Compilation Task
 |----------------------------------------------------------------
 |
 | This task will compile your Sass, including minification and
 | and auto-prefixing. Sass is one of the CSS pre-precessors
 | supported by Elixir, along with the Less CSS processor.
 |
 */

var gulpTask = function(src, output, options) {
    var paths = prepGulpPaths(src, output);
    
    new Elixir.Task('critical', function() {

        config.sourcemaps = false;

        return compile({
            name: 'Critical Sass',
            compiler: require('gulp-sass'),
            src: paths.src,
            output: paths.output,
            task: this,
            pluginOptions: options || config.css.sass.pluginOptions
        });
    })
        .watch(paths.src.baseDir + '/angular/material/critical\.(sass|scss)')
        .ignore(paths.output.path);

};


Elixir.extend('critical', function() {
    gulpTask.apply(this, arguments);
});

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|Array} src
 * @param  {string|null}  output
 * @return {GulpPaths}
 */
var prepGulpPaths = function(src, output) {
    return new Elixir.GulpPaths()
        .src(src, config.get('assets.css.sass.folder'))
        .output(output || config.get('public.css.outputFolder'), 'app.css');
};

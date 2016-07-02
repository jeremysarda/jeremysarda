var gulp = require('gulp');
var Elixir = require('laravel-elixir');

var $ = Elixir.Plugins;
var config = Elixir.config;

/*
 |----------------------------------------------------------------
 | Critical Sass Compilation Task
 |----------------------------------------------------------------
 |
 | This task will compile your Sass, including minification and
 | and auto-prefixing. Sass is one of the CSS pre-precessors
 | supported by Elixir, along with the Less CSS processor.
 |
 */

var gulpTask = function (src, output, options) {
    var paths = prepGulpPaths(src, output);

    new Elixir.Task('critical', function () {

        var compileOptions = {
            name: 'Critical Sass',
            compiler: require('gulp-sass'),
            src: paths.src,
            output: paths.output,
            task: this,
            pluginOptions: options || config.css.sass.pluginOptions
        };

        this.log(compileOptions.src, compileOptions.output);

        return (
            gulp
                .src(compileOptions.src.path)
                .pipe(compileOptions.compiler(compileOptions.pluginOptions))
                .on('error', function (e) {
                    new Elixir.Notification().error(e, compileOptions.name + ' Compilation Failed');

                    this.emit('end');
                })
                .pipe($.if(config.css.autoprefix.enabled, $.autoprefixer(config.css.autoprefix.options)))
                .pipe($.concat(compileOptions.output.name))
                .pipe($.if(config.production, $.cssnano(config.css.cssnano.pluginOptions)))
                .pipe($.if(config.sourcemaps, $.sourcemaps.write('.')))
                .pipe(gulp.dest(compileOptions.output.baseDir))
                .pipe(new Elixir.Notification(compileOptions.name + ' Compiled!'))
        );
    })
        .watch(paths.src.baseDir + '/angular/material/critical\.(sass|scss)')
        .ignore(paths.output.path);

};


Elixir.extend('critical', function () {
    gulpTask.apply(this, arguments);
});

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|Array} src
 * @param  {string|null}  output
 * @return {GulpPaths}
 */
var prepGulpPaths = function (src, output) {
    return new Elixir.GulpPaths()
        .src(src, config.get('assets.css.sass.folder'))
        .output(output || config.get('public.css.outputFolder'), 'app.css');
};

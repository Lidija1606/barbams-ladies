var elixir = require('laravel-elixir');

gulp.task("less", function () {
    elixir(function (mix) {
        mix.less('app.less');
    });
});

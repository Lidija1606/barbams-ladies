const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.webpackConfig({
//     'plugins': ['@babel/plugin-proposal-class-properties']
// });


mix.scripts(['resources/client-js/order.js'], 'public/js/order.js');
mix.scripts(['resources/client-js/gallery.js'], 'public/js/gallery.js');
mix.scripts(['resources/client-js/results.js'], 'public/js/results.js');
mix.scripts(['resources/client-js/script.js'], 'public/js/script.js');
mix.scripts(['resources/client-js/timer.js'], 'public/js/timer.js');
mix.scripts(['resources/client-js/testimonials.js'], 'public/js/testimonials.js');
mix.scripts(['resources/client-js/testimonials_homepage_carousel.js'], 'public/js/testimonials_homepage_carousel.js');
mix.scripts(['resources/client-js/barbams-slider.js'], 'public/js/barbams-slider.js');
// mix.scripts(['resources/client-js/simpleLightbox.js'], 'public/js/simpleLightbox.js');
mix.sass('resources/sass/client.scss', 'public/css');
mix.sass('resources/sass/partners.scss', 'public/css');
mix.sass('resources/sass/testimonials.scss', 'public/css');
mix.sass('resources/sass/results.scss', 'public/css');
mix.sass('resources/sass/elixir.scss', 'public/css');
mix.sass('resources/sass/team.scss', 'public/css');
mix.sass('resources/sass/contact.scss', 'public/css');
mix.sass('resources/sass/barbams-slider.scss', 'public/css');
mix.sass('resources/sass/home-video.scss', 'public/css');
// mix.sass('resources/sass/simpleLightbox.scss', 'public/css');
// .sass('resources/js/src/scss/style.scss', 'public/css');
//mix.react('resources/js/src/index.js', 'public/js')
//
//  .sass('resources/js/src/scss/style.scss', 'public/css');
if (mix.inProduction()) {
  mix.version();
}

'use strict';


// Define the `indexPage` module
angular.module('indexPage', [
    'core.movie',
    'header',
    'uiGmapgoogle-maps',
    'footer',
    'googleMap'
]);

require('./index-page.component');
require('./index-page.template.html');

require('./google-map/google-map.module');


'use strict';

require('./css/app.css');
 
require('./bower_components/angular/angular');

require('./bower_components/angular-resource/angular-resource');
require('./bower_components/angular-ui-router/release/angular-ui-router');
require('./bower_components/angular-ui-bootstrap/dist/ui-bootstrap-tpls-2.5.0.min');
require('../node_modules/angular-simple-logger/dist/angular-simple-logger');
require('./bower_components/angular-google-maps/dist/angular-google-maps');


require('./core/core.module');
require('./components/index-page/index-page.module');
require('./components/about-page/about-page.module');
require('./components/header/header.module');
require('./components/footer/footer.module');
require('./components/login/login.module');
require('./components/admin/admin.module');
require('./components/admin-add/admin-add.module');


// Define the `sportApp` module
angular.module('sportApp', [
  'ui.router',
  'core',
  'indexPage',
  'aboutPage',
  'admin',
  'adminAdd',
  'login',
  'uiGmapgoogle-maps'
]);


require('./app.config');
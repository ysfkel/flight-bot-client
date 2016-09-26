import angular from 'angular';
import appConfig from './app.config/app.config';
import 'angular-ui-router';
import './booking';


const app_dependencies=[
  'ui.router',
  'app.booking'
];
angular.module('app',app_dependencies)
.run(function(){

})
angular.module('app').config(appConfig);

angular.bootstrap(document,['app']);


//

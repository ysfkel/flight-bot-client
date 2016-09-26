import angular from 'angular';
import config from './config';
import flightSearchController from './controllers/flight-search.controller';
import BotService from '../services/bot.service';

const module_dependencies=[
    
];

let bookingModule=angular.module('app.booking',module_dependencies);
bookingModule.config(config);
bookingModule.controller('flightSearchController',flightSearchController);
bookingModule.service('BotService',BotService);
export default bookingModule;
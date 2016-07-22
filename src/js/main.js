import angular from 'angular';
import 'angular-ui-router';
import { config } from './config';
import { appConstant } from './app.constant';
import { AddController } from './controllers/add.controller';
import { SingleController } from './controllers/single.controller';
import { HomeController } from './controllers/home.controller';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('SERVER', appConstant)
  .controller('HomeController', HomeController)
  .controller('SingleController', SingleController)
  .controller('AddController', AddController);
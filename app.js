'use strict';
//var myModule = require('');

 // Define the `app` module
var app = angular.module('demo', ['ngMessages', 'ngRoute']);

// Define the config of stateprovider to handle the routes with ui.router
app.config(function($routeProvider, $locationProvider) {
$routeProvider.caseInsentiveMatch = true;
$routeProvider
  .when("/home", {
    templateUrl: "template/home.html",
    controller: 'homeController'
    
  })
  .when("/message", {
    
    templateUrl: "template/message.html",
    controller: "messageController",
    controllerAs: "messageCtrl"
  })
  .when("/wishlist", {
    
    templateUrl: "template/wishlist.html",
    controller: "wishlistController",
    controllerAs: "wishlistCtrl"
  })
  .when("/setting", {
    
    templateUrl: "template/setting.html",
    controller: "settingController",
    controllerAs: "settingCtrl"
  })
  .when("/account", {
    
    templateUrl: "template/account.html",
    controller: "accountController"
    
  })
  .otherwise({ redirectTo: '/home' });


});





 // Define the `app` controller on the `app` module
app.controller('appController',function appController($scope) {




});



app.controller('homeController', function($scope){

  
  $scope.shipment = [
    {
      date:"friday, 23th",
      cod_ship: "",
      time: "7:40 PM",
      total: 250,
      notifications: 1,
      start: "Houston, TX, 33619",
      end: "Atlanta, GA, 30123"
    },
    {
      date:"friday, 23th",
      cod_ship: "",
      time: "7:40 PM",
      total: 250,
      notifications: 1,
      start: "Houston, TX, 33619",
      end: "Atlanta, GA, 30123"
    },
    {
      date:"friday, 23th",
      cod_ship: "",
      time: "7:40 PM",
      total: 250,
      notifications: 1,
      start: "Houston, TX, 33619",
      end: "Atlanta, GA, 30123"
    }
  ]
});


app.controller('accountController', function($scope){

});






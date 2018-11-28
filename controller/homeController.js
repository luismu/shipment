
var app = angular.module('demo', []);
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
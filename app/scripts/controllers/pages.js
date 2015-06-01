'use strict';

/**
 * @ngdoc function
 * @name globsynApp.controller:promolistCtrl
 * @description
 * # AboutCtrl
 * Controller of the globsynApp
 */
var app=angular.module('sandvikusaAdminAppsApp');

app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller('pageCtrl', function ($scope,$http,$route) {
    $scope.listAll = true;
    $scope.editAll = false;
    $scope.loading = true;
    $scope.editLoading=false;
    $scope.curPage = 0;
    $scope.pageSize = 5;
    $scope.MaxPage = 0;
    $scope.Run=1;    
     //Get All data
    $http.jsonp("http://beta.iservices.earlymoments.com/getcampaignlist?token=741889E3-4565-40A1-982A-F15F7A923D72&format=json&callback=JSON_CALLBACK")
        .success(function(data) {
            $scope.results = data.response ;                     
            $scope.MaxPage=Math.ceil($scope.results.length / $scope.pageSize);
            $scope.loading = false;                 
        }).error(function(){
            alert("Error");
        });  
});
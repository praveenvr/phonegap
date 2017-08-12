/**
 * Created by praveen on 09/08/17.
 */

(function () {
    function myAppCtrl($scope, $mdSidenav) {
        $scope.title = "My first mobile App";
        $scope.author = "Praveen VR";
        $scope.version = "1.0.0(Beta)";
        $scope.isOpen = false;


    };

    var myApp = angular.module('myApp',['ui.router','ngMaterial','common'])
        .controller('myAppCtrl',['$scope','$mdSidenav', myAppCtrl])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('Default',{
                    url:'/',
                    views:{
                        'content':{templateUrl: "partials/components/items/items_list.html"}
                    }
                })
                .state('home',{
                    url:'/home',
                    views:{
                        'content':{templateUrl: "partials/components/items/items_list.html"}
                    }
                })
                .state('messages',{
                    url:'/message',
                    views:{
                        'content': {templateUrl:"partials/components/messages/messages.html"}

                    }
                })
                .state('notification',{
                    url:'/notification',
                    views:{
                        'content': {template:""}

                    }
                })
                .state('general',{
                    url:'/general',
                    views:{
                        'content': {templateUrl:"partials/components/forms/general_settings/general_settings.html"}

                    }
                });
        });


}());
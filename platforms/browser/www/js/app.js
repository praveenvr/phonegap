/**
 * Created by praveen on 09/08/17.
 */

(function () {
    function myAppCtrl($scope, $mdSidenav) {
        $scope.title = "My first mobile App";
        $scope.author = "Praveen VR";
        $scope.version = "1.0.0(Beta)";
        $scope.isOpen = false;

        $scope.toggleLeft = buildToggler('left');
        // $scope.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
                $scope.isOpen = true;
            };
        }
    };

    var myApp = angular.module('myApp',['ui.router','ngMaterial'])
        .controller('myAppCtrl',['$scope','$mdSidenav', myAppCtrl])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('Default',{
                    url:'/',
                    views:{
                        'header' :{templateUrl:"partials/common/header/header.html"},
                        'sidenav':{templateUrl: "partials/common/sidenav/sidenav.html"},
                        'content':{templateUrl: "partials/components/items/items_list.html"},
                        'footer':{templateUrl:"partials/common/footer/footer.html"}
                    }
                })
                .state('home',{
                    url:'/home',
                    views:{
                        'header' :{templateUrl:"partials/common/header/header.html"},
                        'sidenav':{templateUrl: "partials/common/sidenav/sidenav.html"},
                        'content':{templateUrl: "partials/components/items/items_list.html"},
                        'footer':{templateUrl:"partials/common/footer/footer.html"}
                    }
                })
                .state('messages',{
                    url:'/message',
                    views:{
                        'header' :{templateUrl:"partials/common/header/header.html"},
                        'sidenav':{templateUrl: "partials/common/sidenav/sidenav.html"},
                        'content': {templateUrl:"partials/components/messages/messages.html"},
                        'footer':{templateUrl:"partials/common/footer/footer.html"}

                    }
                })
                .state('general',{
                    url:'/general',
                    views:{
                        'header' :{templateUrl:"partials/common/header/header.html"},
                        'sidenav':{templateUrl: "partials/common/sidenav/sidenav.html"},
                        'content': {templateUrl:"partials/components/forms/general_settings/general_settings.html"},
                        'footer':{templateUrl:"partials/common/footer/footer.html"}

                    }
                });
        });


}());
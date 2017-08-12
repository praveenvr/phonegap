(function () {
    function footerCtrl($scope, $rootScope) {
        $scope.footerMenuItems = [
            {
                "icon":"fa-home",
                "url":"home",
                "selected":true
            },
            {
                "icon":"fa-comments",
                "url":"messages",
                "selected":false
            },
            {
                "icon":"fa-search",
                "url":"search",
                "selected":false
            },
            {
                "icon":"fa-bell",
                "url":"notification",
                "selected":false
            },
            {
                "icon":"fa-gear",
                "url":"general",
                "selected":false
            }
        ];

        $scope.selectTab = function (index) {

            for(var i=0; i<=4; i++){
                $scope.footerMenuItems[i].selected = false;
            }
            $scope.footerMenuItems[index].selected = true;
            if($scope.footerMenuItems[index].url === 'search'){
                $scope.isSearchTrigger = !$scope.isSearchTrigger;

            }else{
                $scope.isSearchTrigger = false;
            }
            $rootScope.$broadcast('searchTriggered', {isSearchTrigger : $scope.isSearchTrigger});
        };

    };
    angular.module('common.footer',[])
        .controller('footerCtrl',['$scope','$rootScope',footerCtrl])
}());
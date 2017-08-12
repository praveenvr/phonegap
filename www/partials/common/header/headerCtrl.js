(function () {
    function headerCtrl($scope, $mdSidenav) {
        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
                $scope.isOpen = true;
            };
        };

        $scope.isSearchTrigger = false;

        var searchTriggered = $scope.$on('searchTriggered', function (event, data) {
            $scope.isSearchTrigger = data.isSearchTrigger;
        });

        // $scope.$destroy(searchTriggered);
    }

  angular.module('common.header',[])
      .controller('headerCtrl',['$scope','$mdSidenav' ,headerCtrl]);
}())
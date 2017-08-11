/**
 * Created by praveen on 10/08/17.
 */

(function () {

    function myAppHeader() {
        return{
            restrict: 'A',
            templateUrl:'header.html'
        }
    };
  angular.directive('myAppHeader', myAppHeader);
}())
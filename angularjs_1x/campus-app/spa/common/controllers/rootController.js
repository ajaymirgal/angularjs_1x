(function(application) {
    console.log("rootCtrl init");

    application.controller("rootCtrl", rootCtrl)
    rootController.$inject('$scope');

    function rootCtrl($scope) {
        //$scope.strudents = studentService.getStrudents();
        console.log("rootCtrl init");
    }
})(angular.module("Campusapp"));
(function(StudentsApp) {
    //
    StudentsApp.controller("studentsCtrl", studentsCtrl);

    //DI
    studentsCtrl.$inject = ['$scope', 'studentService'];

    //studentCtrl
    function studentsCtrl($scope, studentService) {
        $scope.strudents = studentService.getStrudents();
    }


})(angular.module("StudentsModule"));
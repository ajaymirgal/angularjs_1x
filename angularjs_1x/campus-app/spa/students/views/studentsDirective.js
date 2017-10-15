(function(StudentApp) {

    //Directive Ctration//
    StudentApp.directive('students', students);

    //Directive
    function students() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "spa/students/views/studentsView.html"
        }
    }

})(angular.module("StudentsModule"))
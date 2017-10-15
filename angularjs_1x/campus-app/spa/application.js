(function() {
    angular.module("Campusapp", ["StudentsModule"]).config(config);

    //
    config.$inject = ["$routeProvider"];

    //
    function config($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "../index.html",
            controller: "rootCtrl"
        }).when("/students", {
            templateUrl: "spa/students/views/studentsView.html",
            controller: "studentsCtrl"
        }).otherwise({ redirectTo: "/" });
    }

})();
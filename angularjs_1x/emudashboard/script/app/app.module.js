//Angular app//
var application = angular.module('EMUDashboard', ["ngRoute"]);

// App constants //
application.constant('appConstant', {
    "baseURL":"https://test.hiskenya.com"
});

//Rounting...
application.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/admin.html",
        controller: adminCtrl
    })
    .when("/input", {
        templateUrl : "views/input.html"
    })
    .when("/output", {
        templateUrl : "views/output.html"
    })
    .otherwise({ redirectTo: "/" });
}]);

/*application.run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {
    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
          $scope.part = $route.current.activetab;
        });

        // onclick event handlers
        $scope.showForm = function () {
          $('.contactRow').slideToggle();
        };
        $scope.closeForm = function () {
          $('.contactRow').slideUp();
        };

        // save the 'Contact Us' form
        $scope.save = function () {
          $scope.loaded = true;
          $scope.process = true;
          $http.post('sendemail.php', $scope.message).success(function () {
              $scope.success = true;
              $scope.process = false;
          });
        };
}]);*/


(function(studentApp) {

    //Service Creations
    studentApp.factory('studentService', studentService);

    //DI
    studentService.$inject = ['dataHubService', 'dataService'];

    //
    function studentService(dataHubService, dataService) {

        //
        var service = {
            getStudents: getStudents
        };

        function getStudents() {
            return dataService.getStudents('url', searchFilters, suceessCb, errorCb);
        }

        //
        function suceessCb(result) {}

        //
        function errorCb(error) {}
    }

})(angular.module("StudentsModule"));
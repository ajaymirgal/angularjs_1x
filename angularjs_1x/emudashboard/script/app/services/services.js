//
application.service('getUser', function ($http) {
    this.get = function () {
        //var response = $http.get("https://test.hiskenya.org/kenya/api/me?fields=dataViewOrganisationUnits");
        var response = $http.get('https://test.hiskenya.org/kenya/api/me?fields=dataViewOrganisationUnits', {
                headers: {'Authorization': 'Basic bmF0aDpOYXJhbGUxMjM='}
        });

        return response;
    };
});

application.service('getUserProfile', function ($http) {
    this.get = function () {
        var response = $http.get("https://test.hiskenya.org/kenya/api/organisationUnits/HfVjCurKxh2", {
                headers: {'Authorization': 'Basic bmF0aDpOYXJhbGUxMjM='}
        });
        return response;
    };
});

application.service('getCounties', function ($http) {
    this.get = function () {
        var response = $http.get("https://test.hiskenya.org/kenya/api/organisationUnits/HfVjCurKxh2/children.json", {
                headers: {'Authorization': 'Basic bmF0aDpOYXJhbGUxMjM='}
        });
        return response;
    };
});

//Admin page Controller//
function adminCtrl($scope, $http, $q, getUser, getUserProfile, getCounties, appConstant) {
    console.log("function adminCtrl");
    console.log("service base url: "+appConstant.baseURL);
    //
    $scope.getUserData=[];
    $scope.getUserProfileData=[];
    $scope.getCountiesData=[];
    //requestData();

    //
    function requestData(){
        var promiseGetUser = getUser.get();
        var promiseGetUserProfile = getUserProfile.get();
        var promiseGetCounties = getCounties.get();

        //
        $scope.combineServices  = $q.all([promiseGetUser, promiseGetUserProfile, promiseGetCounties])
        .then(function(r){
            $scope.getUserData = r[0].data;
            $scope.getUserProfileData = r[1].data;
            $scope.getCountiesData = r[2].data.children;

            //
            console.log($scope.getCountiesData);
        }, 
        function(err){
            console.log(err);
        });
    }

    //
    $scope.lastName = "Doe";
}

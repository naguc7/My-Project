app.controller("drloginctrl",function ($scope,$http) {
    $scope.drlogin = function () {
        var url = "http://localhost:4000/doctorlogin?drloginUsername="+$scope.duname+"&drloginPassword="+$scope.dpwd;
        $http.get(url)
            .then(function(response){
                console.log(response)
                 alert(response.data)
            })
    }
});
app.controller("ptloginctrl",function ($scope,$http) {
    $scope.ptlogin = function () {
        var url = "http://localhost:4000/patientlogin?ptloginUsername="+$scope.puname+"&ptloginPassword="+$scope.ppwd;
        $http.get(url)
            .then(function(response){
                console.log(response)
                 alert(response.data)
            })
    }
});
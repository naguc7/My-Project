app.controller("ptregistrationctrl",function ($scope,$http) {
    $scope.ptregistration = function () {
        var url = "http://localhost:4000/patientregistration?ptregUsername="+$scope.ptusername+"&ptregPassword="+$scope.ptuserpwd+"&ptfullname="+$scope.ptfullname+"&ptage="+$scope.ptrage+"&ptgender="+$scope.ptgender;
        $http.get(url)
            .then(function(response){
                console.log(response)
                 alert(response.data)
            })
    }
});
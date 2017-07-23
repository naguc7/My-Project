app.controller("drregistrationctrl",function ($scope,$http) {
    $scope.drregistration = function () {
        var url = "http://localhost:4000/doctorregistration?drregUsername="+$scope.dusername+"&drregPassword="+$scope.duserpwd+"&drfullname="+$scope.dfullname+"&drspecialization="+$scope.drspecialization+"&drage="+$scope.drage+"&drgender="+$scope.drgender;
        $http.get(url)
            .then(function(response){
                console.log(response)
                alert(response.data)
            })
    }
});
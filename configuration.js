
app.config(function($routeProvider){
    $routeProvider
        .when('/adminlogin',{
            templateUrl:"adminLogin.html",
            controller :"adminloginctrl"

        })

        .when('/doctorlogin',{
            templateUrl:"drLogin.html",
            controller :"drloginctrl"

        })

        .when('/doctorregistration',{
            templateUrl:"drRegistration.html",
            controller :"drregistrationctrl"

        })

        .when('/patientlogin',{
            templateUrl:"patientLogin.html",
            controller :"ptloginctrl"

        })

        .when('/patientregistration',{
            templateUrl:"patientRegistration.html",
            controller :"ptregistrationctrl"

        })
});
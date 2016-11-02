(function(angular){

    ///////////////////////////////////////////////////////////////////////
    // -------- toaster component - wrapper for toaster messages-------------
    ////////////////////////////////////////////////////////////////////


    //toaster controller
    function ToasterComponentController(ToasterService){
        var ctrl = this;

        //set toaster list to service toaster list
        ctrl.Toasters = ToasterService.Toasters;
    }

    //inject toaster service
    ToasterComponentController.$inject = ["ToasterService"];

    const component = angular.module("abToaster.component",[]);
    component.component("abToasters",{
        templateUrl:"component/toaster-component/toaster-component.html",
        controller:ToasterComponentController
    })

})(window.angular);
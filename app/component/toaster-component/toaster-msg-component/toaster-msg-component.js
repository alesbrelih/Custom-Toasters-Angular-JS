(function(angular){

    ///////////////////////////////////////
    // toaster message component
    //////////////////////////////////////

    function AbToasterMsgCtrl(ToasterService){

        var ctrl = this;

        //click on message removes toaster, using toaster service
        ctrl.removeToaster = (i) =>{
            ToasterService.Remove(i);
        }

    }

    //inject service into controller
    AbToasterMsgCtrl.$inject = ["ToasterService"];

    const component = angular.module("abToaster.msg",[]);
    component.component("abToastMsg",{
        bindings:{
            toastCfg:"<" //set binding for toaster cfg
        },
        templateUrl:"component/toaster-component/toaster-msg-component/toaster-msg-component.html",
        controller: AbToasterMsgCtrl
        
    })


})(window.angular);
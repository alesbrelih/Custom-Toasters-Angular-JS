(function(){

    ///////////////////////////////////////////////////
    // -------- Toaster message component -------------
    /////////////////////////////////////////////////
    const app = angular.module("toasterMsgComponent",[]);

    //toaster message controller
    function ToasterMessageCtrl(ToasterService){
        var ctrl = this;

        //click on it to remove it from toasters
        //calls toaster service
        ctrl.removeToaster = function(index){
            ToasterService.Remove(index);
        }
    }

    //define component
    app.component("abToasterMsg",{
        templateUrl: "component/toaster-message/ab-toaster-message.html", //template
        bindings: { 
            //bindings
            //msg config objects that holds type, message, and index
            msgConfig: "<"
        },
        controller: ToasterMessageCtrl
    });


})(window.angular);
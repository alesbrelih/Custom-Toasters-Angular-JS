(function(angular){
    
    //initialize app
	let app = angular.module("toasterTestApp",["toasterMsgComponent","toasterServiceModule"]);

    //main controller
	app.controller("MainCtrl",MainControllerFunction);
	function MainControllerFunction(ToasterService){

        let ctrl = this;
        ctrl.Toasters = ToasterService.Toasters; //all toasters

        //testing toasters - adding them when clicking buttons
        ctrl.successToaster = function(){

            ToasterService.AddNew("success","Success message here!");
        };

        ctrl.alertToaster = ()=>{
            ToasterService.AddNew("alert","Alert message here!");
        };

        ctrl.warningToaster = ()=>{
            ToasterService.AddNew("warning","Warning message here!");
        };
        
        

	}
    MainControllerFunction.$inject = ["ToasterService"];

})(window.angular);
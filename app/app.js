(function(angular){
    
    //initialize app
	let app = angular.module("toasterTestApp",["toasterMsgComponent","toasterServiceModule","abToaster.component","abToaster.msg","ngAnimate"]);

    //main controller
	app.controller("MainCtrl",MainControllerFunction);
	function MainControllerFunction(ToasterService){

        let ctrl = this;
        ctrl.Toasters = ToasterService.Toasters; //all toasters

        //testing toasters - adding them when clicking buttons
        ctrl.successToaster = function(){

            ToasterService.Add("success","Success message here!");
        };

        ctrl.alertToaster = ()=>{
            ToasterService.Add("alert","Alert message here!");
        };

        ctrl.warningToaster = ()=>{
            ToasterService.Add("warning","Warning message here!");
        };
        
        

	}
    MainControllerFunction.$inject = ["ToasterService"];

})(window.angular);
(function(angular,document){
    ////////////////////////////////////////////////////
    //-----------service that handles toasters ---------
    ///////////////////////////////////////////////////

    //function for toaster factory

    ToasterServiceFunction.$inject = ["$timeout"];
    function ToasterServiceFunction($timeout){
        var _index = 0; //index for toasters
        var _toasters = []; //list of toasters

        //creates toaster
        _createNewToaster = (_type,_message)=>{

            //save index which will be used
            var newIndex = ++_index;

            //create toaster
            _toasters.push({
                index: newIndex, 
                type: _type,    //warning,alert,success
                message: _message, //message
                visible: false  
            });

            $timeout(()=>{
                //removes toaster after 2s if it wasnt clicked on yet
                _removeToaster(newIndex);
            },2000);

        }
        //remove toaster with index i
        _removeToaster = (i)=>{
            //find toaster with index i
            var item = _toasters.filter(function(toast){
                return toast.index == i;
            });
            //if toaster is found
            if(item.length>0){
                //select and remove it from toasters
                item = item[0];
                var itemIndex = _toasters.indexOf(item);
                _toasters.splice(itemIndex,1);
            }
        }

        //public functions from singleton
        return{
            Toasters: _toasters,
            AddNew:_createNewToaster,
            Remove: _removeToaster
        };
    }


    const toasterServiceModule = angular.module("toasterServiceModule",[]);
    toasterServiceModule.factory("ToasterService",ToasterServiceFunction);

})(window.angular,document);
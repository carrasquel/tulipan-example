
const dialog = (function() {
    var _dialog = {};

    function _show(message){
        try{
            _dialog = bootbox.dialog({
                message: '<p class="text-center mb-0"><i class="fa fa-spin fa-cog"></i> ' + message + '</p>',
                closeButton: false
            });
        }
        catch(err){
            console.log(err);
        }
    }

    function _hide(){
        try{
            setTimeout(function(){ 
                _dialog.modal('hide')
             }, 500);
        }
        catch(err){
            console.log(err);
        }
    }

    function _alert(message){
        bootbox.alert(message);
    }

    return {
        show: _show,
        hide: _hide,
        alert: _alert
    };

})()

var DialogPlugin = new Object;

DialogPlugin.install = function(Tulipan) {

    Tulipan.prototype.$dialog = dialog;
};
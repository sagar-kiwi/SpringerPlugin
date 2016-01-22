// window.plugins.SpringerPlugin
// SpringerPlugin : all args optional
module.exports = {
movePageHandler:function(direction) {

	var args = {};
	if(direction)
		args.direction = direction;
	cordova.exec(null, null, "SpringerPlugin", "movePageHandler", [args]);
},

callWebBrowserHomePage : function() {
    
    var args = {};
	cordova.exec(null, null, "SpringerPlugin", "callWebBrowserHomePage", [args]);
},

callArticlePage: function() {
    
    var args = {};
	cordova.exec(null, null, "SpringerPlugin", "callArticlePage", [args]);
},

callWebBrowserPage: function() {
    
    var args = {};
	cordova.exec(null, null, "SpringerPlugin", "callWebBrowserPage", [args]);
},

callOfflinePDF : function(filePath) {
    
    var args = {};
	if(filePath)
		args.filePath = filePath;
	cordova.exec(null, null, "SpringerPlugin", "callOfflinePDF", [args]);
},

startLoader: function() {
    
    var args = {};
	cordova.exec(null, null, "SpringerPlugin", "startLoader", [args]);
},

stopLoader:function() {
    
    var args = {};
	cordova.exec(null, null, "SpringerPlugin", "stopLoader", [args]);
},

callback : function() {
    
    var args = {};
	cordova.exec(null, null, "SpringerPlugin", "callback", [args]);
}
};

// this will be forever known as the orch-func -jm
// cordova.addConstructor(function() {

// 	if (!window.plugins) {
// 		window.plugins = {};
// 	}
					  
// 	// shim to work in 1.5 and 1.6
// 	if (!window.Cordova) {
// 		window.Cordova = cordova;
// 	};
					   
// 	window.plugins.springerPlugin = new SpringerPlugin();
// });

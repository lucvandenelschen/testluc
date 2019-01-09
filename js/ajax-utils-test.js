(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};
console.log("test");
ajaxUtils.httpRequest = function (requestUrl, returnFunction) {
	var myRequest = new XMLHttpRequest();
	myRequest.onreadystatechange = function () {
		checkReadyState (myRequest, returnFunction);
	};
	myRequest.open("GET", requestUrl, true);
	myRequest.send(null);
}

function checkReadyState (myRequest, returnFunction) {

	if(myRequest.readyState === 4 && myRequest.status === 200) {
		returnFunction(myRequest.responseText);
}
}

global.$ajaxUtils = ajaxUtils;

})(window);
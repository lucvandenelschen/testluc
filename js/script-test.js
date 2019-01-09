
var homeUrl = "../snippets/home-snippet-test.html";
document.addEventListener("DOMContentLoaded", function(event) {
	$ajaxUtils.httpRequest(homeUrl, function(responseText) {
		document.getElementById("main-content").innerHTML = responseText;
	})
});

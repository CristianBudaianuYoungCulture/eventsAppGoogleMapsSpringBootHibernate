$(document).ready(function() {

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}

	function showPosition(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;

		document.getElementById("latitudine").value = latitude;
		document.getElementById("longitudine").value = longitude;
	}
});

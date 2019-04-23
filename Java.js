var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 41.878113, lng: -87.629799},
		zoom: 8
	});
}
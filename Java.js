function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 41.878113, lng: -87.629799},
		zoom: 10
	});
	var Location= {lat: 41.878113,lng: -87.629799};
  	var marker = new google.maps.Marker({
  			position: Location,
  			map: map,
  			title: 'Location'
  			});
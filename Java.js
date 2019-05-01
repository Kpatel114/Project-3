var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 41.878113, lng: -87.629799},
		zoom: 8
	});
<<<<<<< HEAD
}
const carouselSlide = document.querySelector('carousel-slide');
const carouselImages = document.querySelectorAll('carousel-slide img')

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener(
=======
}
>>>>>>> a6a470b3a2524f4bf315f1f10ab4475d0bc34692

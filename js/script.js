// Slider
var arrowRight = document.querySelector('.slide-control-right')
var arrowLeft = document.querySelector('.slide-control-left')
var slides = document.querySelectorAll('.slide')
var indexSlide = 0
var checkedIndicators = document.querySelectorAll('.slider-dot')


addActive()

for (var i = 0; i < checkedIndicators.length; i++) {
  checkedIndicators[i].data = i;
  checkedIndicators[i].addEventListener('click', function () {
    removeActive()
    indexSlide = Number(this.data);
    addActive()
  })
}

arrowLeft.addEventListener('click', function (event) {
  event.preventDefault();
  goLeft();
})

arrowRight.addEventListener('click', function (event) {
  event.preventDefault();
  goRight();
})

function removeActive() {
  slides[indexSlide].classList.remove('active')
  checkedIndicators[indexSlide].classList.remove('active')
}

function addActive() {
  slides[indexSlide].classList.add('active')
  checkedIndicators[indexSlide].classList.add('active')
}

function goLeft() {
  removeActive()
  indexSlide--
  if (indexSlide < 0) {
    indexSlide = slides.length - 1
  }
  addActive()
}

function goRight() {
  removeActive()
  indexSlide++
  if (indexSlide > slides.length - 1) {
    indexSlide = 0
  }
  addActive()
}

// end slider

// serviceSlider
var listService = document.querySelectorAll('.servises-tab')
var slidesService = document.querySelectorAll('.service-item')
var indexSlideService = 0

addActiveService()

for (var i = 0; i < listService.length; i++) {
  listService[i].data = i;
  listService[i].addEventListener('click', function (event) {
    event.preventDefault
    removeActiveService()
    indexSlideService = Number(this.data);
    addActiveService()
  })
}

function addActiveService() {
  slidesService[indexSlideService].classList.add('active')
  listService[indexSlideService].classList.add('active')
}

function removeActiveService() {
  slidesService[indexSlideService].classList.remove('active')
  listService[indexSlideService].classList.remove('active')
}

// end serviceSlider

// modalfeedback

var buttonWriteUs = document.querySelector('.write-us')
var modalfeedback = document.querySelector('.modal-feedback')
var modalfeedbackOverlay = document.querySelector('.modal-wrap')
var btnCloseModalfeedback = document.querySelector('.modal-feedback .modal-close')
var inputName =  modalfeedback.querySelector('[name = modal-feedback-name]')
var form = modalfeedback.querySelector('form')

buttonWriteUs.addEventListener('click', function(event) {
    event.preventDefault();
    modalfeedback.classList.add('active');
    inputName.focus();
})

btnCloseModalfeedback.addEventListener('click', function(event) {
    event.preventDefault();
    modalfeedback.classList.remove('active');
})

form.addEventListener('submit', function (event) {
  eventt.preventDefault();
});



// карта

var smallMap = document.querySelector('.company-contacts img')
var modalmap = document.querySelector('.modal-map')
var modalmapOverlay = document.querySelector('.modal-wrap-map')
var btnCloseModalmap = document.querySelector('.modal-map .map-close')

smallMap.addEventListener('click', function (event) {
  event.preventDefault();
  modalmap.classList.add('active');
})

btnCloseModalmap.addEventListener('click', function (event) {
  event.preventDefault();
  modalmap.classList.remove('active');
})

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
      center: [59.9385, 30.3181],
      zoom: 15,
      controls: []
    }, {
        suppressMapOpenBlock: true
    }),

    myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point",
        coordinates: [59.9382, 30.3228]
      }
    }, {
      preset: 'islands#redDotIcon'
    });

  myMap.geoObjects
    .add(myGeoObject)
}

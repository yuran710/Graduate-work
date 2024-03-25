/* Burger Menu */

// const burgerBtn = document.querySelector('.burger-icon-btn');
// const burgerIcon = document.querySelector('.burger-icon');
// const nav = document.querySelector('.header__top-inner');


// burgerBtn.onclick = function () {
//   burgerIcon.classList.toggle('burger-icon--active');
//   nav.classList.toggle('header__top-inner--mobile');
//   document.body.classList.toggle('.no-scroll');
// }

/* Phon Mask */

mask('[data-tel-input]');

const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value == '+') input.value = '';
  })
  input.addEventListener('blur', () => {
    if (input.value == '+') input.value = '';
  })

});

/* Modal Window */

const modal = document.querySelector('.modal');
const modalButtons = document.querySelectorAll('.measuring__btn');

modalButtons.forEach(function (button) {
  button.addEventListener('click', openModal);
});

modal.addEventListener('click', closeModal);

function openModal(e) {
  e.preventDefault();
  document.body.classList.toggle('body--modal-opened');
}

function closeModal(e) {
  const target = e.target;

  if (target.closest('.modal__cancel')) {
    e.preventDefault();
    document.body.classList.remove('body--modal-opened');
  } else if (target.classList.contains('modal')) {
    document.body.classList.remove('body--modal-opened');
  }
}

/* Modaltwo */

const modaltwo = document.querySelector('.modaltwo');
const modaltwoButtons = document.querySelectorAll('.calculation__btn');

modaltwoButtons.forEach(function (button) {
  button.addEventListener('click', openModaltwo);
});

modaltwo.addEventListener('click', closeModaltwo);

function openModaltwo(e) {
  e.preventDefault();
  document.body.classList.toggle('body--modaltwo-opened');
}

function closeModaltwo(e) {
  const target = e.target;

  if (target.closest('.modaltwo__cancel')) {
    e.preventDefault();
    document.body.classList.remove('body--modaltwo-opened');
  } else if (target.classList.contains('modaltwo')) {
    document.body.classList.remove('body--modaltwo-opened');
  }
}

/* Window-opened */

document.addEventListener('DOMContentLoaded', function() {
  const windowModal = document.querySelector('.window__modal');
  const windowModalButton = document.querySelector('.services__item-windows');
  let swiper; 

  windowModalButton.addEventListener('click', function(e) {
      e.preventDefault();
      document.body.classList.add('body--window-opened');

      if (!swiper) {
          swiper = new Swiper('.window__swiper-container', {
              loop: true,
            
          });
          
          setupPaginationBullets(); 
      }
  });

  windowModal.addEventListener('click', function(e) {
      if (e.target.closest('.window__modal-cancel') || e.target.classList.contains('window__modal')) {
          e.preventDefault();
          document.body.classList.remove('body--window-opened');
      }
  });

  function setupPaginationBullets() {
      const paginationBullets = document.querySelectorAll('.window__swiper-pagination-bullet');

      paginationBullets.forEach((bullet, index) => {
          bullet.addEventListener('click', () => {
              
              swiper.slideTo(index, 500);
          });
      });

      
      swiper.on('slideChange', updateBullets);

      
      updateBullets();
  }

  function updateBullets() {
      const activeIndex = swiper.realIndex; 
      const paginationBullets = document.querySelectorAll('.window__swiper-pagination-bullet');

      paginationBullets.forEach((bullet, index) => {
          
          if (index === activeIndex) {
              bullet.classList.add('window__swiper-pagination-bullet-active');
          } else {
              bullet.classList.remove('window__swiper-pagination-bullet-active');
          }
      });
  }
});

/* Loggia-opened */

document.addEventListener('DOMContentLoaded', function() {
  const loggiaModal = document.querySelector('.loggia__modal');
  const loggiaModalButton = document.querySelector('.services__item-loggia');
  let loggiaSwiper; 

  loggiaModalButton.addEventListener('click', function(e) {
      e.preventDefault();
      document.body.classList.add('body--loggia-opened');

      if (!loggiaSwiper) {
          loggiaSwiper = new Swiper('.loggia__swiper-container', {
              loop: true,
          });
          
          setupLoggiaPaginationBullets(); 
      }
  });

  loggiaModal.addEventListener('click', function(e) {
      if (e.target.closest('.loggia__modal-cancel') || e.target.classList.contains('loggia__modal')) {
          e.preventDefault();
          document.body.classList.remove('body--loggia-opened');
      }
  });

  function setupLoggiaPaginationBullets() {
      const paginationBullets = document.querySelectorAll('.loggia__swiper-pagination-bullet');

      paginationBullets.forEach((bullet, index) => {
          bullet.addEventListener('click', () => {
              loggiaSwiper.slideTo(index, 500);
          });
      });

      loggiaSwiper.on('slideChange', updateLoggiaBullets);

      updateLoggiaBullets();
  }

  function updateLoggiaBullets() {
      const activeIndex = loggiaSwiper.realIndex; // Получаем активный индекс для логгии
      const paginationBullets = document.querySelectorAll('.loggia__swiper-pagination-bullet');

      paginationBullets.forEach((bullet, index) => {
          if (index === activeIndex) {
              bullet.classList.add('loggia__swiper-pagination-bullet-active');
          } else {
              bullet.classList.remove('loggia__swiper-pagination-bullet-active');
          }
      });
  }
});


/* House-opened */

document.addEventListener('DOMContentLoaded', function() {
  const houseModal = document.querySelector('.house__modal');
  const houseModalButton = document.querySelector('.services__item-house');
  let houseSwiper; 

  houseModalButton.addEventListener('click', function(e) {
      e.preventDefault();
      document.body.classList.add('body--house-opened');

      if (!houseSwiper) {
          houseSwiper = new Swiper('.house__swiper-container', {
              loop: true,
          });
          
          setupHousePaginationBullets(); 
      }
  });

  houseModal.addEventListener('click', function(e) {
      if (e.target.closest('.house__modal-cancel') || e.target.classList.contains('house__modal')) {
          e.preventDefault();
          document.body.classList.remove('body--house-opened');
      }
  });

  function setupHousePaginationBullets() {
      const paginationBullets = document.querySelectorAll('.house__swiper-pagination-bullet');

      paginationBullets.forEach((bullet, index) => {
          bullet.addEventListener('click', () => {
              houseSwiper.slideTo(index, 500);
          });
      });

      houseSwiper.on('slideChange', updateHouseBullets);

      updateHouseBullets();
  }

  function updateHouseBullets() {
      const activeIndex = houseSwiper.realIndex; // Получаем активный индекс для дома
      const paginationBullets = document.querySelectorAll('.house__swiper-pagination-bullet');

      paginationBullets.forEach((bullet, index) => {
          if (index === activeIndex) {
              bullet.classList.add('house__swiper-pagination-bullet-active');
          } else {
              bullet.classList.remove('house__swiper-pagination-bullet-active');
          }
      });
  }
});


/* Corporate opened */

document.addEventListener('DOMContentLoaded', function() {
  const corporateModal = document.querySelector('.corporate__modal');
  const corporateModalButton = document.querySelector('.services__item-corporate');
  let corporateSwiper; 

  corporateModalButton.addEventListener('click', function(e) {
      e.preventDefault();
      document.body.classList.add('body--corporate-opened');

      if (!corporateSwiper) {
          corporateSwiper = new Swiper('.corporate__swiper-container', {
              loop: true,
          });
          
          setupCorporatePaginationBullets(); 
      }
  });

  corporateModal.addEventListener('click', function(e) {
      if (e.target.closest('.corporate__modal-cancel') || e.target.classList.contains('corporate__modal')) {
          e.preventDefault();
          document.body.classList.remove('body--corporate-opened');
      }
  });

  function setupCorporatePaginationBullets() {
      const paginationBullets = document.querySelectorAll('.corporate__swiper-pagination-bullet');

      paginationBullets.forEach((bullet, index) => {
          bullet.addEventListener('click', () => {
              corporateSwiper.slideTo(index, 500);
          });
      });

      corporateSwiper.on('slideChange', updateCorporateBullets);

      updateCorporateBullets();
  }

  function updateCorporateBullets() {
      const activeIndex = corporateSwiper.realIndex; 
      const paginationBullets = document.querySelectorAll('.corporate__swiper-pagination-bullet');

      paginationBullets.forEach((bullet, index) => {
          if (index === activeIndex) {
              bullet.classList.add('corporate__swiper-pagination-bullet-active');
          } else {
              bullet.classList.remove('corporate__swiper-pagination-bullet-active');
          }
      });
  }
});


/* Product swiper slide */

var swiper = new Swiper('.product__swiper-container', {
  slidesPerView: 1,
  spaceBetween: 500,
  navigation: {
    nextEl: '.product__button-next',
    prevEl: '.product__button-prev',
  },
  effect: 'slide',
  speed: 800,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      let bulletText;
      switch (index) {
        case 0:
          bulletText = 'Стандарт';
          break;
        case 1:
          bulletText = 'Бизнес';
          break;
        case 2:
          bulletText = 'Премиум';
          break;
        case 3:
          bulletText = 'Эксклюзив';
          break;
        default:
          bulletText = '';
      }
      return '<span class="' + className + '">' + bulletText + '</span>';
    },
  },
});

/* Tabs */

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs__nav-link');
  const tabContents = document.querySelectorAll('.tabs__content-item');
  let swiperReviews = null;
  let swiperCertificates = null;

  function clearTabsAndContent() {
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    tabContents.forEach(content => {
      content.style.display = 'none'; 
      content.classList.remove('active');
    });
  }

  function initOrUpdateSwiper(activeTab) {
    if (activeTab === '#tab3') {
      if (swiperReviews) {
        swiperReviews.update();
      } else {
        swiperReviews = new Swiper('.reviews__swiper-container', {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 8,
          navigation: {
            nextEl: '.reviews__button-next',
            prevEl: '.reviews__button-prev',
          },
          effect: 'slide',
          speed: 800,
        });
      }
    } else if (activeTab === '#tab4') {
      if (swiperCertificates) {
        swiperCertificates.update();
      } else {
        swiperCertificates = new Swiper('.certificat__swiper-container', {
          loop: true,
          slidesPerView: 5,
          spaceBetween: 2,
          navigation: {
            nextEl: '.certificat__button-next',
            prevEl: '.certificat__button-prev',
          },
          effect: 'slide',
          speed: 500,
        });
      }
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', event => {
      event.preventDefault();

      const paneId = tab.getAttribute('href');
      const activePane = document.querySelector(paneId);

      clearTabsAndContent();

      tab.classList.add('active');
      activePane.classList.add('active'); 

      activePane.style.display = 'flex';
      activePane.style.opacity = 0;
      setTimeout(() => { activePane.style.opacity = 1; }, 10); 

      initOrUpdateSwiper(paneId);
    });
  });

  if (tabs.length > 0) {
    tabs[0].click();
  }
});

/* Review opened */ 

const reviewModal = document.querySelector('.review__modal'); 
const reviewModalButtons = document.querySelectorAll('.reviews__otziv-btn');

reviewModalButtons.forEach(button => {
  button.addEventListener('click', openReviewModal); 
});

if (reviewModal) {
  reviewModal.addEventListener('click', closeReviewModal);
}

function openReviewModal(e) {
  e.preventDefault();
  document.body.classList.add('body--review-opened'); 
}

function closeReviewModal(e) {
  const target = e.target;

  if (target.closest('.review__modal-cancel') || target.classList.contains('review__modal')) {
    e.preventDefault();
    document.body.classList.remove('body--review-opened'); 
  }
}

/* Portfolio swiper slide */ 

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.portfolio__swiper-container', {
      loop: true, 
      slidesPerView: 4,
      spaceBetween: 30, 

      navigation: {
          nextEl: '.portfolio__button-next',
          prevEl: '.portfolio__button-prev',
      },
  });
});

/* Yandex Map */ 

var globalSwiper = null; 

ymaps.ready(init);

function initModalMap() {
  var modalMap = new ymaps.Map("map-2", {
    center: [56.988713, 40.974909],
    zoom: 13,
  });

  var placemark = new ymaps.Placemark([56.988713, 40.974909], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/map/location-pin.svg',
    iconImageSize: [30, 38],
    iconImageOffset: [-15, -38]
  });
  modalMap.geoObjects.add(placemark);

  modalMap.controls.remove('geolocationControl');
  modalMap.controls.remove('searchControl');
  modalMap.controls.remove('trafficControl');
  modalMap.controls.remove('typeSelector');
  modalMap.controls.remove('rulerControl');
  modalMap.behaviors.disable(['scrollZoom']);

  modalMap.container.fitToViewport();
}

function init() {
  var map = new ymaps.Map("map", {
    center: [56.988713, 40.974909],
    zoom: 13
  });

  var places = [[56.988713, 40.974909]];

  places.forEach(function(location) {
    var placemark = new ymaps.Placemark(location, {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/map/location-pin.svg',
      iconImageSize: [30, 38],
      iconImageOffset: [-15, -38]
    });

    placemark.events.add('click', function() {
      document.body.classList.add('body--map-opened');
      var modal = document.querySelector('.map__modal');
      var modalContent = document.querySelector('.map__modal-content');
      modal.style.display = 'block';
      setTimeout(function() {
        modalContent.style.opacity = 1;
        modalContent.style.transform = 'translate(0, 0)';
        if (!globalSwiper) {
          initSwiper();
        } else {
          globalSwiper.slideTo(0, 0); 
          updateBulletsActiveState(0); 
        }
        initModalMap();
      }, 10);
    });

    map.geoObjects.add(placemark);
  });

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('rulerControl');
  map.behaviors.disable(['scrollZoom']);

  var closeModal = function() {
    document.body.classList.remove('body--map-opened');
    var modal = document.querySelector('.map__modal');
    var modalContent = document.querySelector('.map__modal-content');
    modalContent.style.opacity = 0;
    modalContent.style.transform = 'translate(0px, -100%)';
    setTimeout(function() {
      modal.style.display = 'none';
    }, 800);
  };

  document.querySelector('.map__modal-cancel').addEventListener('click', function(event) {
    event.preventDefault();
    closeModal();
  });

  window.addEventListener('click', function(event) {
    var modal = document.querySelector('.map__modal');
    if (event.target == modal) {
      closeModal();
    }
  });
}

function initSwiper() {
  if (!globalSwiper) {
    globalSwiper = new Swiper('.map__swiper-container', {
      loop: true,
      initialSlide: 0
    });

    var paginationBullets = document.querySelectorAll('.map__swiper-pagination-bullet');

    paginationBullets.forEach(function(bullet, index) {
      bullet.addEventListener('click', function() {
        globalSwiper.slideToLoop(index);
      });
    });

    globalSwiper.on('slideChange', function() {
      let activeIndex = globalSwiper.realIndex;
      updateBulletsActiveState(activeIndex);
    });

    updateBulletsActiveState(0); 
  }
}

function updateBulletsActiveState(activeIndex) {
  var paginationBullets = document.querySelectorAll('.map__swiper-pagination-bullet');
  paginationBullets.forEach(function(bullet, index) {
    bullet.classList.toggle('map__swiper-pagination-bullet-active', index === activeIndex);
  });
}

/* Accordion */ 

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.question-answer__question');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      
      this.classList.toggle('active');
      let answer = this.nextElementSibling;

      
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        this.setAttribute('aria-expanded', 'false');
      } else {
        
        const allAnswers = document.querySelectorAll('.question-answer__answer');
        allAnswers.forEach(ans => {
          ans.style.maxHeight = null;
          ans.previousElementSibling.setAttribute('aria-expanded', 'false');
        });

        
        answer.style.maxHeight = answer.scrollHeight + "px";
        this.setAttribute('aria-expanded', 'true');
      }

      
      buttons.forEach(btn => {
        if (btn !== this) {
          btn.classList.remove('active');
          btn.nextElementSibling.style.maxHeight = null;
        }
      });
    });
  });
});

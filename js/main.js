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

const windowModal = document.querySelector('.window__modal');
const windowModalButton = document.querySelector('.services__item-windows');

windowModalButton.addEventListener('click', openwindowModal);
windowModal.addEventListener('click', closewindowModal);

function openwindowModal(e) {
  e.preventDefault();
  document.body.classList.toggle('body--window-opened');
}

function closewindowModal(e) {
  e.preventDefault()

  const target = e.target;

  if (target.closest('.window__modal-cancel') || target.classList.contains('window__modal')) {
    document.body.classList.remove('body--window-opened');
  }
}

/* Loggia-opened */

const loggiaModal = document.querySelector('.loggia__modal');
const loggiaModalButton = document.querySelector('.services__item-loggia');

loggiaModalButton.addEventListener('click', openloggiaModal);
loggiaModal.addEventListener('click', closeloggiaModal);

function openloggiaModal(e) {
  e.preventDefault();
  document.body.classList.toggle('body--loggia-opened');
}

function closeloggiaModal(e) {
  e.preventDefault()

  const target = e.target;

  if (target.closest('.loggia__modal-cancel') || target.classList.contains('loggia__modal')) {
    document.body.classList.remove('body--loggia-opened');
  }
}

/* House-opened */

const houseModal = document.querySelector('.house__modal');
const houseModalButton = document.querySelector('.services__item-house');

houseModalButton.addEventListener('click', openhouseModal);
houseModal.addEventListener('click', closehouseModal);

function openhouseModal(e) {
  e.preventDefault();
  document.body.classList.toggle('body--house-opened');
}

function closehouseModal(e) {
  e.preventDefault()

  const target = e.target;

  if (target.closest('.house__modal-cancel') || target.classList.contains('house__modal')) {
    document.body.classList.remove('body--house-opened');
  }
}

/* Corporate opened */

const corporateModal = document.querySelector('.corporate__modal');
const corporateModalButton = document.querySelector('.services__item-corporate');

corporateModalButton.addEventListener('click', opencorporateModal);
corporateModal.addEventListener('click', closecorporateModal);

function opencorporateModal(e) {
  e.preventDefault();
  document.body.classList.toggle('body--corporate-opened');
}

function closecorporateModal(e) {
  e.preventDefault()

  const target = e.target;

  if (target.closest('.corporate__modal-cancel') || target.classList.contains('corporate__modal')) {
    document.body.classList.remove('body--corporate-opened');
  }
}

/* Product swiper slide */ 

var swiper = new Swiper('.product__swiper-container', {
  slidesPerView: 1,
  spaceBetween: 500,
  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: 'slide',
        speed: 800,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      let bulletText;
      switch(index) {
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

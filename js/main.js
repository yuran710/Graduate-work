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
phoneInputs.forEach((input)=>{
  input.addEventListener('input', ()=>{
    if (input.value == '+') input.value = '';
  })
  input.addEventListener('blur', ()=>{
    if (input.value == '+') input.value = '';
  })

});

/* Modal Window */ 

const modal = document.querySelector('.modal')
const modalButton = document.querySelector('.measuring-btn')

modalButton.addEventListener('click', openModal)
modal.addEventListener('click', closeModal)

function openModal(e) {
  e.preventDefault()
  document.body.classList.toggle('body--modal-opened')
}

function closeModal(e) {

  // e.preventDefault()
  
  const target = e.target

  if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
    document.body.classList.remove('body--modal-opened')
  }
}

const modaltwo = document.querySelector('.modaltwo')
const modaltwoButton = document.querySelector('.calculation-btn')

modaltwoButton.addEventListener('click', openModaltwo)
modaltwo.addEventListener('click', closeModaltwo)

function openModaltwo(e) {
  e.preventDefault()
  document.body.classList.toggle('body--modaltwo-opened')
}

function closeModaltwo(e) {

  // e.preventDefault()
  
  const target = e.target

  if (target.closest('.modaltwo__cancel') || target.classList.contains('modaltwo')) {
    document.body.classList.remove('body--modaltwo-opened')
  }
}
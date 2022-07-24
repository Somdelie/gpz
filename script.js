'use strict';


/*nabar toggle */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-navbar-link]");
const overlay = document.querySelector("[data-overlay]");

for(let i = 0; i < navToggler.length; i++){
    navToggler[i].addEventListener("click", function (){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

for(let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click", function (){
        navbar.classList.remove("active");
        overlay.classList.remove("active");
    });
}

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function(){
    if (window.scrollY > 100 ){
        header.classList.add("active");
    }else {
        header.classList.remove("active");
    }
})


/*=====service-modal====*/

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const Overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal1 = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

Overlay?.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal1.active')
  modals.forEach(modal1 => {
    closeModal(modal1)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal1 = button.closest('.modal1')
    closeModal(modal)
  })
})

function openModal(modal1) {
  if (modal1 == null) return
  modal1.classList.add('active')
  Overlay.classList.add('active')
}

function closeModal(modal1) {
  if (modal1 == null) return
  modal1.classList.remove('active')
  Overlay.classList.remove('active')
}

function closeModal(modal1){
  if(modal1 == null) return
  modal1.classList.remove('active')
  Overlay.classList.remove('active')
}

//=====form====
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});
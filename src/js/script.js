import index from "../index.html";
// import new pages here
import page from "../page.html";

import * as MyFn from "../js/home";

import AOS from 'aos';
import 'aos/dist/aos.css';

import "../css/style.css";
import "../css/style.scss";

AOS.init({
  once: true
});

const links = document.querySelectorAll(".link");

for (const link of links) {
  link.onclick = function clickHandler(e) {
    e.preventDefault()
    const href = this.getAttribute('href')
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
  }
}

// MyFn.showHome();

// mobile menu
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");  
});

// sticky menu desktop

const header = document.getElementById('header-menu');

function addClassHeader() {
  header.classList.add("fixed-menu");
  header.classList.remove("relative");
}

function removeClassHeader(){
  header.classList.remove("fixed-menu");
  header.classList.add("relative");
}

window.addEventListener('scroll', function(){
  let getScrollposition = window.scrollY;
  const mediaQuery = window.matchMedia('(min-width: 1024px)');

  if(mediaQuery.matches){
    if(getScrollposition > 50){
      addClassHeader();
    } else {
      removeClassHeader();
    }
  }   
});
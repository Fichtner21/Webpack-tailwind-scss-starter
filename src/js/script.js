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
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

MyFn.showHome();
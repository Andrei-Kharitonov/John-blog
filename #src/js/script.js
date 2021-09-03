//burger-menu
menu__icon.onclick = function () {
  menu__icon.classList.toggle("_active");
  menu__body.classList.toggle("_active");
}


//menu_on
let url = window.location.href;

if (url.includes("index.html")) {
  document.querySelector("#home").classList.add("menu__link_on");
}

else if (url.includes("work.html") || url.includes("work-page")) {
  document.querySelector("#work").classList.add("menu__link_on");
}

else if (url.includes("blog.html") || url.includes("blog-page")) {
  document.querySelector("#blog").classList.add("menu__link_on");
}

else if (url.includes("contact.html")) {
  document.querySelector("#contact").classList.add("menu__link_on");
}
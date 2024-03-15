if (localStorage.getItem("pref-theme") === "dark") {
  document.body.classList.add("dark");
} else if (localStorage.getItem("pref-theme") === "light") {
  document.body.classList.remove("dark");
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark");
}

let menu = document.getElementById("menu");
if (menu) {
  menu.scrollLeft = localStorage.getItem("menu-scroll-position");
  menu.onscroll = function () {
    localStorage.setItem("menu-scroll-position", menu.scrollLeft);
  };
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var id = this.getAttribute("href").substr(1);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelector(`[id='${decodeURIComponent(id)}']`)
        .scrollIntoView({
          behavior: "smooth",
        });
    } else {
      document
        .querySelector(`[id='${decodeURIComponent(id)}']`)
        .scrollIntoView();
    }
    if (id === "top") {
      history.replaceState(null, null, " ");
    } else {
      history.pushState(null, null, `#${id}`);
    }
  });
});

var mybutton = document.getElementById("top-link");
window.onscroll = function () {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    mybutton.style.visibility = "visible";
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.visibility = "hidden";
    mybutton.style.opacity = "0";
  }
};

document.getElementById("theme-toggle").addEventListener("click", () => {
  if (document.body.className.includes("dark")) {
    document.body.classList.remove("dark");
    localStorage.setItem("pref-theme", "light");
  } else {
    document.body.classList.add("dark");
    localStorage.setItem("pref-theme", "dark");
  }
});

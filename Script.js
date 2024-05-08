var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
  settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}

//to store dark mode or light theme in the web page
//localStorage.setItem("theme","light");
//localStorage.getItem("theme");

//Marketplace

function filterItems(category) {
  var items = document.querySelectorAll(".card");

  items.forEach(function (item) {
    if (item.parentElement.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

document.querySelectorAll(".catogories a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    var category = this.getAttribute("data-category"); // Get category from data attribute
    filterItems(category); // Call function to filter items
  });
});

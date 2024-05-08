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
  const items = document.querySelectorAll("title-for-you > div");
  items.forEach((item) => {
    if (category === "Cloth") {
      // Show only cloth items
      if (item.classList.contains("Cloth")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    } else if (category === "Vehicle") {
      // Show only vehicle items
      if (item.classList.contains("Vehicle")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    } else if (category === "Property") {
      // Show only property items
      if (item.classList.contains("Property")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    } else if (category === "Beauty") {
      // Show only beauty items
      if (item.classList.contains("Beauty")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    } else if (category === "Stationary") {
      // Show only stationary items
      if (item.classList.contains("Stationary")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    } else if (category === "Grocery") {
      // Show only grocery items
      if (item.classList.contains("Grocery")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    } else if (category === "Jewellary") {
      // Show only jewellary items
      if (item.classList.contains("Jewellary")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    } else {
      // Display all items
      item.style.display = "block";
    }
  });
}

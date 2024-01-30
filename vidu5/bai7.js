document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.getElementsByClassName("dropdown");
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function () {
      this.getElementsByClassName("dropdown-content")[0].classList.toggle(
        "show"
      );
    });
  }

  var subdropdowns = document.getElementsByClassName("dropdown-submenu");
  for (var i = 0; i < subdropdowns.length; i++) {
    subdropdowns[i].addEventListener("click", function () {
      this.getElementsByClassName(
        "dropdown-submenu-content"
      )[0].classList.toggle("show");
    });
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }

      var subdropdowns = document.getElementsByClassName(
        "dropdown-submenu-content"
      );
      for (var i = 0; i < subdropdowns.length; i++) {
        var opensubDropdown = subdropdowns[i];
        if (opensubDropdown.classList.contains("show")) {
          opensubDropdown.classList.remove("show");
        }
      }
    }
  };
});

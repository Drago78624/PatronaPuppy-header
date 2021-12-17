document.getElementById("hamburger").addEventListener("click", () => {
  const menuDisplay = document.getElementById("menu");
  const dropdownDisplay = document.querySelector(".navbar-dropdown__option--menu");
  //   if (menuDisplay.style.display == "none") {
  //     menuDisplay.classList.toggle("u-display-block");
  //   } else if (menuDisplay.style.display == "block") {
  //     menuDisplay.classList.toggle("u-display-block");
  //   }
  //   console.log(menuDisplay);
  menuDisplay.classList.toggle("u-display-block");
  dropdownDisplay.classList.remove("u-display-none");
    
});

document.getElementById("blog").addEventListener("click", () => {
  const dropdownDisplay = document.querySelector(".navbar-dropdown__option--menu");
  dropdownDisplay.classList.toggle("u-display-none");
  document.getElementById("blog").classList.toggle("u-color-black")
    
});




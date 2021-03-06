// When the user scrolls the page, execute myFunction
window.onscroll = function() {navbarScroll()};

// Get the offset position of the navbar

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarScroll() {
  const navbar = document.querySelector(".navbar-wagon");
  var sticky = navbar.offsetTop;
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

export { navbarScroll };

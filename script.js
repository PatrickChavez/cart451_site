/* Navigation Bar */
/* Code from W3Schools */
/* https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp */

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.querySelector(".sidebar").style.width = "250px";
  document.querySelector(".navigationButton").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.querySelector(".sidebar").style.width = "0";
  document.querySelector(".navigationButton").style.marginLeft = "0";
}

/* Back To Top Button */
/* Code from W3Schools */
/* https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */

// Get the button:
let mybutton = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

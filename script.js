function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "information";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "information";
    moreText.style.display = "inline";
  }
}

// // Get the h1 element
// var title = document.getElementById('title');

// // Add event listener for mouse hover
// title.addEventListener('mouseover', function() {
//   // Change the text to "office archive" on hover
//   title.textContent = 'office archive';
// });

// // Add event listener for mouseout
// title.addEventListener('mouseout', function() {
//   // Change the text back to "office repository" when not hovering
//   title.textContent = 'office repository';
// });

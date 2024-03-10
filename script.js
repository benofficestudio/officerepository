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

// Function to change the background color based on mouse position
function changeBackgroundColor(event) {
    // Calculate color values based on mouse position
    var x = event.clientX;
    var y = event.clientY;
    var color = 'rgb(' + x % 255 + ',' + y % 255 + ',' + (x + y) % 255 + ')';
    // Set the background color of the body
    document.body.style.backgroundColor = color;
}

// Add event listener for mousemove event
document.addEventListener('mousemove', changeBackgroundColor);

// // Function to change the background color
// function changeBackgroundColor() {
//     // Get a random color
//     var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//     // Set the background color of the body
//     document.body.style.backgroundColor = randomColor;
// }

// // Call the function when the page finishes loading
// window.onload = function() {
//     changeBackgroundColor();
// };

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

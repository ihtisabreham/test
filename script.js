lconst nameElement = document.getElementById('name');

// Array of names to loop through
const names = ["Rasel", "Reham"];
let nameIndex = 0;
let nameInterval;

// On mouse enter, change the body background to the uploaded GIF and start changing the names
nameElement.addEventListener('mouseenter', function() {
  // Set the GIF as the background
  document.body.style.backgroundImage = "url('https://dtlive.s3.ap-south-1.amazonaws.com/16830/SEO-and-Development-Animated-GIF-Icon-Pack.gif')";
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';

  // Start changing the names every 500ms
  nameInterval = setInterval(() => {
    nameElement.textContent = names[nameIndex];
    nameIndex = (nameIndex + 1) % names.length;
  }, 500); // Change name every 500 milliseconds
});

// On mouse leave, reset the background and stop changing the names
nameElement.addEventListener('mouseleave', function() {
  // Remove the GIF
  document.body.style.backgroundImage = '';

  // Reset the name back to the original
  nameElement.textContent = 'ihtisab';

  // Stop changing the names
  clearInterval(nameInterval);
});

//https://embedpress.com/wp-content/uploads/2022/06/How-To-Embed-Interactive-Gif-On-WordPress-Site-Without-Coding-1.gif

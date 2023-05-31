// set up the canvas
var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d");

//set the dimensions of the canvas to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// set up the raindrop object
var Raindrop = function (x, y, speed, length, thickness) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.length = length;
  this.thickness = thickness;
};

Raindrop.prototype.update = function () {
  //move the raindrop down based on its speed
  this.y += this.speed;

  // if the raindrop has gone off the bottom of the screen, reset it
  if (this.y > canvas.height) {
    this.y = 0;
  }
};

Raindrop.prototype.draw = function () {
  //Draw the raindrop as a line
  context.beginPath();
  context.moveTo(this.x, this.y);
  context.lineTo(this.x , this.y + this.length);
  context.strokeStyle = "rgba(255, 255, 255, 0.325)";
  context.lineWidth = this.thickness;
  context.stroke();
};

//create an array of raindrop
var numRaindorps = 1000;
var raindrops = [];

for (var i = 0; i < numRaindorps; i++) {
  //Randomly set the raindrops initial position, speed, length , and thicknes
  var x =  Math.random() * canvas.width;
  var y =  Math.random() * canvas.height;
  var speed = 15 + Math.random() * 15;
  var length = 30 + Math.random() * 10;
  var thickness = 1 + Math.random() * 2;

  //create the raindrop object and add it to the array
  var raindrop = new Raindrop(x, y, speed, length, thickness);
  raindrops.push(raindrop);
}

//update add draw the raindrops every fram
function update() {
  //clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  //update and draw each raindrop
  for (var i = 0; i < numRaindorps; i++) {
    raindrops[i].update();
    raindrops[i].draw();
  }

  //request the next frame
  requestAnimationFrame(update);
}

//start the animation loop
requestAnimationFrame(update);


function scrolll() {
  var right = document.querySelector(".scroll-images");
  right.scrollBy(350, 0)
}

function scrollr() {
  var left = document.querySelector(".scroll-images");
  left.scrollBy(-350, 0)
}

function addToWishlist() {
  var confirmationMessage = "Your item has been added to your wishlist.";
  alert(confirmationMessage);}


  const toggleSearch = (search, button) =>{
    const searchBar = document.getElementById(search),
          searchButton = document.getElementById(button)
 
    searchButton.addEventListener('click', () =>{
        // We add the show-search class, so that the search bar expands
        searchBar.classList.toggle('show-search')
    })
 }
 toggleSearch('search_bar', 'search-button')

 
 

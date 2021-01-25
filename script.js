var images = document.querySelectorAll("#imgs img");
const imgs = document.getElementById("imgs");
var counter = 0;
var y = 2;


function SlideImages(){

imgs.style.transform = `translateX(${counter*300}px)`;

counter--;
y++;

if (images.length == y) {

    counter = 0;
    y = 2;
}
}
setInterval(SlideImages,1000);
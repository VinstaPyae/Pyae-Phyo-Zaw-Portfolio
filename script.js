const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

//animation//
let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = () =>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000);

// Function to set up slideshow
function setupSlideshow(images, slideshowClassName) {
    var slideshowImages = document.querySelectorAll("." + slideshowClassName);
  
    slideshowImages.forEach(function(image, index) {
      function nextSlide() {
        image.style.opacity = 0; // Fade out the image
        setTimeout(function() {
          index = (index + 1) % images.length; // Update the index
          image.src = images[index];
          image.style.opacity = 1; // Fade in the new image
        }, 1000); // Wait for 1 second before changing the image (half of the transition time)
      }
  
      // Call nextSlide every 3 seconds (adjust the interval as needed)
      setInterval(nextSlide, 3000);
    });
  }
  
  // Slideshow for project images
  var projectImages = ["img/Projects/BI-intro.png", "img/Projects/PowerBI.png", "img/Projects/BI-linechart.png", "img/Projects/BI-piechart.png", "img/Projects/UON-barchart.png", "img/Projects/BI-conclu.png"];
  setupSlideshow(projectImages, "bi-image");
  
  // Slideshow for main images
  var images = ["img/Projects/UON-home.png", "img/Projects/UON-tdl.png", "img/Projects/UON-community.png", "img/Projects/UON-foodcourt.png", "img/Projects/UON-location.png", "img/Projects/UON-admin.png", "img/Projects/UON-cms.png"];
  setupSlideshow(images, "uon-image");
  
  var movieImages = ["img/Projects/rental1.png","img/Projects/rental2.png","img/Projects/rental3.png"];
  setupSlideshow(movieImages, "mov-img");

  var osImages = ["img/Projects/os1.png","img/Projects/os2.png","img/Projects/os3.png"];
  setupSlideshow(osImages, "os-img");
  
  var ebImages = ["img/Projects/eb1.png","img/Projects/eb2.png","img/Projects/eb3.png","img/Projects/eb4.png"];
  setupSlideshow(ebImages, "eb-img");

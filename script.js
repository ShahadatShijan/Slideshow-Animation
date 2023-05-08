const slideshowElements = document.querySelectorAll(".slideshow-element");
let elementLength = slideshowElements.length;

let count = 1;
setInterval(() => {
    count++;
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");
    if(count > elementLength){
        count = 1;
        slideshowElements[0].classList.add("current");
    }else{
        currentElement.nextElementSibling.classList.add("current");
    }   
}, 1000);
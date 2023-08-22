// header js
const headerMediaButton = document.querySelector(".header-content-media");
const headerMedia = document.querySelector(".header-content");
headerMediaButton.addEventListener("click",()=>{
    if(headerMedia.classList.contains("active")){
        headerMedia.classList.remove("active");
        headerMediaButton.innerHTML = `<i class="fa fa-align-justify"></i>`;
    }
    else{
        headerMedia.classList.add("active");
        headerMediaButton.innerHTML = `<i class="fa fa-angle-double-down"></i>`;
    }
})

// slider js

let slideCount = 0;
function slider(){
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide)=>{
        slide.style.display = "none";
    })
    if(slideCount>slides.length-1){
        slideCount = 0;
    }
    slides[slideCount].style.display = "block";
    slideCount++;
    setTimeout(slider,3000);
}
slider();

//testimonial
const testimonials = document.querySelectorAll(".testimonials");
function testimonial(index){
    testimonials.forEach((testimonial)=>{
        testimonial.style.display = "none";
    })
    testimonials[index].style.display = "flex";
}
let index = 0;
testimonial(index);

let leftTestimonial = document.querySelector(".left-testimonial");
leftTestimonial.addEventListener("click",()=>{
    index--;
    if(index < 0){
        index = testimonials.length-1;
    }
    testimonial(index);
})

let rightTestimonial = document.querySelector(".right-testimonianl");
rightTestimonial.addEventListener("click",()=>{
    index++;
    if(index > testimonials.length-1){
        index = 0;
    }
    testimonial(index);
})

//social media
const socialMedia = document.querySelector(".social-media");
socialMedia.addEventListener("click",()=>{
    console.log("click")
    document.querySelector(".all-social-meadia").classList.toggle("active");
    if(document.querySelector(".all-social-meadia").classList.contains("active")){
        socialMedia.innerHTML=`<i class="fa fa-share-square-o" aria-hidden="true" style="font-size: 30px;"></i>`
    }
    else{
        socialMedia.innerHTML=`<i class="fa fa-share-square" aria-hidden="true" style="font-size: 30px;"></i>`
    }
})
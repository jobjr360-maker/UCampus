// ===============================
// UCampus Announcement Carousel
// ===============================
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

// Show selected slide
function showSlide(index){
    if(index >= slides.length){
        currentSlide = 0;
    }
    else if(index < 0){
        currentSlide = slides.length - 1;
    }
    else{
        currentSlide = index;
    }
    const slidesContainer = document.querySelector(".slides");

    slidesContainer.style.transform =
        `translateX(-${currentSlide * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentSlide].classList.add("active");
}

/*------------ Next Button Event Listener ----------------*/
nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

/*------------ Previous Button Event Listener ------------*/
prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

/*------------ Auto-Slide ---------------*/
let autoSlide = setInterval(() => {
    showSlide(currentSlide + 1);
},5000);

/*------------ Pause Auto-Slide on Hover -------------*/
const carousel = document.querySelector(".carousel");
carousel.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
});

/*------------ Resume Auto-Slide on Mouse Leave -------------*/
carousel.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
        showSlide(currentSlide + 1);
    },5000);
});

/*------------ Dot Navigation -------------*/
dots.forEach((dot,index)=>{
    dot.addEventListener("click",()=>{
        showSlide(index);
    });
});

/*------------ Show Initial Slide -------------*/
showSlide(0);


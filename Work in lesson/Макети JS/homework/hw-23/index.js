// let box = document.querySelector(".box")
// let obsBtn = document.querySelector(".obs")
// let unObsBtn = document.querySelector(".unobs")
// let images = document.querySelectorAll(".img__item")

// const observer = new IntersectionObserver((entries) => {

//     entries.forEach(entry => 
//     {

//         if (!entry.isIntersecting) return;

//         const img = entry.target;

//         img.src = img.dataset.src;

//         img.addEventListener("load", () => {
//             img.classList.remove("lazy-img");
//         });

//         observer.unobserve(img);

//     });

// }, { threshold: 0.5 });


// obsBtn.addEventListener("click", () => {
//   images.forEach(img => observer.observe(img));
//   console.log("observe");
// });


// unObsBtn.addEventListener("click", () => {
//   images.forEach(img => observer.unobserve(img));
//   console.log("unobserve");
// });


// discBtn.addEventListener("click", () => {
//   observer.disconnect();
//   console.log("disconnect");
// });

const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".side-menu a");
const viewSpans = document.querySelectorAll(".side-menu .views");
const pauseBtn = document.getElementById("unobserve");
const resumeBtn = document.getElementById("observe");
const resetBtn = document.getElementById("reset");

let views = Array(sections.length).fill(0);
let lastActive = -1;


const lazyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const img = entry.target.querySelector("img");
      if(img && img.dataset.src){
        img.src = img.dataset.src;
        img.classList.add("loaded");
        img.removeAttribute("data-src");
      }
      lazyObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => lazyObserver.observe(section));


const activeObserver = new IntersectionObserver(entries => {
  let activeIndex = -1;
  
  entries.forEach(entry => {
    if(entry.isIntersecting) activeIndex = Array.from(sections).indexOf(entry.target);
  });

  if(activeIndex !== -1 && activeIndex !== lastActive){
    views[activeIndex]++;
    viewSpans[activeIndex].textContent = views[activeIndex];
    lastActive = activeIndex;
  }

  menuLinks.forEach(link => link.classList.remove("active"));
  if(activeIndex !== -1) menuLinks[activeIndex].classList.add("active");
}, { threshold: 0.5 });

sections.forEach(section => activeObserver.observe(section));


pauseBtn.addEventListener("click", () => activeObserver.disconnect());
resumeBtn.addEventListener("click", () => sections.forEach(section => activeObserver.observe(section)));
resetBtn.addEventListener("click", () => {
  views = Array(sections.length).fill(0);
  viewSpans.forEach(span => span.textContent = 0);
  lastActive = -1;
});
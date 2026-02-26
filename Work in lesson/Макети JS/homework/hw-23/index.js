let box = document.querySelector(".box")
let obsBtn = document.querySelector(".obs")
let unObsBtn = document.querySelector(".unobs")
let images = document.querySelectorAll(".img__item")

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => 
    {

        if (!entry.isIntersecting) return;

        const img = entry.target;

        img.src = img.dataset.src;

        img.addEventListener("load", () => {
            img.classList.remove("lazy-img");
        });

        observer.unobserve(img);

    });

}, { threshold: 0.5 });


obsBtn.addEventListener("click", () => {
  images.forEach(img => observer.observe(img));
  console.log("observe");
});


unObsBtn.addEventListener("click", () => {
  images.forEach(img => observer.unobserve(img));
  console.log("unobserve");
});


discBtn.addEventListener("click", () => {
  observer.disconnect();
  console.log("disconnect");
});
console.log("Restaurant Website Loaded Successfully!");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
const hiddenElements = document.querySelectorAll(
".menu, .about, .reviews, .contact"
);

window.addEventListener("scroll", () => {
    hiddenElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            el.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => {
    el.classList.add("hidden");
});

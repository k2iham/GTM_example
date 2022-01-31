const container = document.querySelector('.container');
const card = document.querySelector('.card');
//Items
const title = document.querySelector("h1");
const sneaker = document.querySelector(".shoe img");
const description = document.querySelector(".card p");
// const sizes = document.querySelector("button");

//const container = document.querySelector('.container');
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animation starts
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //zoom
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg) scale(1.4)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
});
// Animation ends
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
})
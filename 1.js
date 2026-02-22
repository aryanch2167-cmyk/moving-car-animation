const road = document.querySelector(".road");

let speed = 3;

document.body.addEventListener("click", () => {
    speed = speed === 3 ? 1 : 3;
    road.style.animationDuration = speed + "s";
});
const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesbtn = document.querySelector(".yesbtn");
const nobtn = document.querySelector(".nobtn");

yesbtn.addEventListener("click", () => {
    question.innerHTML = "YAYYYY, I LIKE YOU TOO";
    gif.src ="https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gifyou.webp";
});

nobtn.addEventListener("mouseover" , ()=> {
    const nobtnrect = nobtn.getBoundingClientRect();
    const maxX = window.innerWidth - nobtnrect.width;
    const maxY = window.innerHeight - nobtnrect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    nobtn.style.left = randomX + "px";
    nobtn.style.top = randomY + "px";
}) 
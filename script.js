const welcome = 'Welcome!';
const h1 = document.querySelector(".heading-primary")
console.log(welcome)
console.log(h1)
h1.addEventListener("click", function () {
    h1.textContent = welcome;
    h1.style.textShadow = "0.8rem 1.4rem 0.8rem #ddd";
    h1.style.fontSize = "4.8rem";
});

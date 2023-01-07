const total = document.querySelector(".js-attTotal");
const strength = document.querySelector(".js-attStrength");
const strengthButton = document.querySelector(".js-arrowStrength");

strengthButton.addEventListener("click", () => {
    strength.innerText++;
    total.innerText--;
});
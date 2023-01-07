let total = document.querySelector(".js-attTotal");
let strength = document.querySelector(".js-attStrength");
let strengthButton = document.querySelector(".js-arrowStrength");

let level = 1;
document.querySelector(".js-level").innerHTML = `${level}`;

const levelButton = document.querySelector(".js-arrowLevel");

levelButton.addEventListener("click", () => {
    if (level < 50) {
        level++;
    } else {
        level = 50;
    }
    document.querySelector(".js-level").innerHTML = `${level}`;
});


strengthButton.addEventListener("click", () => {
    if (strength.innerText < 38 + level * 2) {
        strength.innerText++;
        total.innerText--;
    } else {
        strength = 38 + level*2;
    }
});
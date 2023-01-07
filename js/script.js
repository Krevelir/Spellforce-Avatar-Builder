let total = document.querySelector(".js-attTotal");
let strength = document.querySelector(".js-attStrength");
let strengthButton = document.querySelector(".js-arrowStrength");

let level = 1;
document.querySelector(".js-level").innerHTML = `${level}`;

const levelButton = document.querySelector(".js-arrowLevel").onclick = () => {
    if (level < 50) {
        level++;
    } else {

    }
    document.querySelector(".js-level").innerHTML = `${level}`;
};


strengthButton.addEventListener("click", () => {
    if (strength.innerText < 38 + level * 2 && total.innerText > 0) {
        strength.innerText++;
        total.innerText--;
    } else {
        
    }
});
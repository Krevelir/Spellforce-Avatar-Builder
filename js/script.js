
let strength = 25;
let level = 1;
let total = 30;

const setValues = () => {
    document.querySelector(".js-attStrength").innerHTML = `${strength}`;
    document.querySelector(".js-attTotal").innerHTML = `${total}`;
    document.querySelector(".js-level").innerHTML = `${level}`;
};

setValues();

const levelButton = document.querySelector(".js-arrowLevel").onclick = () => {
    if (level < 50) {
        level++;
        total +=5;
    } else {

    }
    setValues();
};

const strengthButton = document.querySelector(".js-arrowStrength").onclick = () => {
    if (strength < 38 + level * 2 && total > 0) {
        strength++;
        total--;
        setValues();
    } else {

    };
}
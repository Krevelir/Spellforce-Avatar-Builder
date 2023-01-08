let strength = 25;
let stamina = 25;
let dexterity = 25;
let agility = 25;
let intelligence = 25;
let wisdom = 25;
let charisma = 25;
let level = 1;
let total = 30;

const setValues = () => {
    document.querySelector(".js-attStrength").innerHTML = `${strength}`;
    document.querySelector(".js-attStamina").innerHTML = `${stamina}`;
    document.querySelector(".js-attDexterity").innerHTML = `${dexterity}`;
    document.querySelector(".js-attAgility").innerHTML = `${agility}`;
    document.querySelector(".js-attIntelligence").innerHTML = `${intelligence}`;
    document.querySelector(".js-attWisdom").innerHTML = `${wisdom}`;
    document.querySelector(".js-attCharisma").innerHTML = `${charisma}`;
    document.querySelector(".js-attTotal").innerHTML = `${total}`;
    document.querySelector(".js-level").innerHTML = `${level}`;
};

setValues();

const levelButton = document.querySelector(".js-arrowLevel").onclick = () => {
    if (level < 50) {
        level++;
        total += 5;
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

const staminaButton = document.querySelector(".js-arrowStamina").onclick = () => {
    if (stamina < 38 + level * 2 && total > 0) {
        stamina++;
        total--;
        setValues();
    } else {
        
    };
}
const dexterityButton = document.querySelector(".js-arrowDexterity").onclick = () => {
    if (dexterity < 38 + level * 2 && total > 0) {
        dexterity++;
        total--;
        setValues();
    } else {

    };
}

const agilityButton = document.querySelector(".js-arrowAgility").onclick = () => {
    if (agility < 38 + level * 2 && total > 0) {
        agility++;
        total--;
        setValues();
    } else {

    };
}

const intelligenceButton = document.querySelector(".js-arrowIntelligence").onclick = () => {
    if (intelligence < 38 + level * 2 && total > 0) {
        intelligence++;
        total--;
        setValues();
    } else {

    };
}

const wisdomButton = document.querySelector(".js-arrowWisdom").onclick = () => {
    if (wisdom < 38 + level * 2 && total > 0) {
        wisdom++;
        total--;
        setValues();
    } else {

    };
}

const charismaButton = document.querySelector(".js-arrowCharisma").onclick = () => {
    if (charisma < 38 + level * 2 && total > 0) {
        charisma++;
        total--;
        setValues();
    } else {

    };
}
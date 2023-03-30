
// PRVNÍ ÚKOL



const justFood = (guests) => {
    let cena = (guests * 250);
    return `Just Food pro ${guests} osob za cenu ${cena} Kč.`
}

const yourMama = (guests) => {
    let cena = (guests * 360);
    return `Your Mama pro ${guests} osob za cenu ${cena} Kč.`
}


const flavorHaven = (guests) => {
    let cena = (guests * 650);
    return `Flavor Haven pro ${guests} osob za cenu ${cena} Kč.`
}


const createEvent = (udalost, guests, catering) => {
    return `Událost ${udalost} s cateringem od společnosti ${catering(guests)}`
}




// DRUHÝ ÚKOL


let dice = document.querySelector(".dice");

let pocetZmacknuti = 1;

function changeDice() {

    pocetZmacknuti = pocetZmacknuti + 1;

    if (pocetZmacknuti === 7) {
        pocetZmacknuti = 1
    }

    dice.src = `img/side${pocetZmacknuti}.svg`
}

document.addEventListener('keydown', changeDice);



// TRETI UKOL


let alarm = document.querySelector(".alarm");

let audio = document.querySelector("#audio");

let timeOutId;

timeOutId = setTimeout(() => {
    alarm.classList.add("alarm--ring");
    audio.play();
    }, 5000);


let nastavovac = document.getElementById("nastavovac");

nastavovac.addEventListener("click", nastavit)

function nastavit() {
    let delay = prompt("Kolik si ještě chceš přispat?")
      
    timeOutId = setTimeout(() => {
        alarm.classList.add("alarm--ring");
        audio.play();
    }, delay);
}


let zamackavac = document.getElementById("zamackavac");

zamackavac.addEventListener("click", zamacknout)

function zamacknout() {
    alarm.classList.remove("alarm--ring");
    audio.pause();
    clearTimeout(timeOutId);
}

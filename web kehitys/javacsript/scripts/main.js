/*myImage -muuttujassa on viittaus  html -dokumentin img -elementtiin
-const -muuttujaa ei voi muokata 
-let -muuttujaa voi muokata
-var -muuttujaa ei enää käytetä*/

const myImage = document.querySelector("img"); 

/*onclick -ominaisuus johon tallennetaan funktio => */
myImage.onclick = () => {
    // Määritellään mitä nuoli funktio tekee klikatessa.
    // Klikkaus vaihtaa kahden kuvan välillä.
    // Otetaan talteen mikä kuva näkyy.
    // if(kuvaA){
    //      näytä kuvaB
    // }
    // else {
    //      näytä kuvaA    
    // }

    // Otetaan talteen mikä kuva näkyy ennen klikkausta.
    const mySrc = myImage.getAttribute("src");

    // Jos sivulla näkyy alkuperäinen kuva.
    if (mySrc === "images/firefox-icon.png") {
        // Vaihdetaan kuvan src attribuutti toiseen kuvaan.
        myImage.setAttribute("src", "images/firefox2.jpg");
    } else { // Jos koodi tulee tänne asti, oli kyseessä kuva 2
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
}

/*otetaan talteen elementtien button ja h1 viittaukset muuttujiin*/
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// Luodaan funktio, jota voidaan käyttää myöhemmin.
function setUserName() {
    // Luetaan käyttäjältä nimi ja tallenetaan muuttujaan myName.
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {

    // Tallenetaan käyttäjän syöttämä arvo muistiin selaimeen.
    localStorage.setItem("name", myName);


    myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

// Tarkistetaan onko nimi jo tallessa. Jos ei ole, suoritetaan nimen kysyminen.
if (!localStorage.getItem("name")) { 
    setUserName(); // Suoritetaan funktio, joka pyytää käyttäjän nimen.
} 
    // Käyttäjä on jo antanut nimen, haetaan se selaimen muistista.
    else {
    // Haetaan nimi
    const storedName = localStorage.getItem("name");
    // Päivitetään nimi otsikkoon
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};

// Jos käyttäjä peruu syötön, saadaan arvo null.
// Null tarkoittaa, että kohdasta puuttuu arvo.

// Jos käyttäjä syöttää tyhjän boxin, ei tule mitään näkyviin koska "". 
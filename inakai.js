const shirtinakai = document.querySelector("#shirtinakai")
const jacketinakai = document.querySelector("#jacketinakai")
const armorinakai = document.querySelector("#armorinakai")
const end = document.querySelector("#end");
const muziekje = new Audio('awaken-136824.mp3');
// https://forum.freecodecamp.org/t/playing-local-mp3-file-in-visual-studio-code/451363/3 - audio//
let bovenkleding = document.querySelector("#bovenkleding")
let GeluidAan = true

//docent hulp//
shirtinakai.addEventListener("click", () => {
    bovenkleding.src = "shirt_i.jpg"
})

jacketinakai.addEventListener("click", () => {
    bovenkleding.src = "jacket_i.jpg"
})

armorinakai.addEventListener("click", () => {
    bovenkleding.src = "armor_i.jpg"
})

// mijn opdracht lamp/ douwe hulp om de knop op aan en uit te kunnen zetten//
function muziek() {

    if (GeluidAan == true) {
        muziekje.pause();
        GeluidAan = false
    } else {
        muziekje.play();
        GeluidAan = true
    }

}

end.addEventListener("click", muziek)

//CHAT-GPT//
function glitch() {
    document.querySelector('.glitch-button').classList.toggle('glitch');
}
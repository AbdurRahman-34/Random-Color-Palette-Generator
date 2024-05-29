const refreshbtn = document.querySelector(".refresh-btn");

const generatedPaletter = () => {

    const maxPetterBoxes = 32;

    for (let i = 0; i < maxPetterBoxes; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
        randomHex = `#${randomHex.padStart(6, 0)}`
        
        const color = document.createElement("li")
        color.classList.add("color")
    }

}   

refreshbtn.addEventListener("click", generatedPaletter)
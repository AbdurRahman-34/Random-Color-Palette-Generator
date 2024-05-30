const container = document.querySelector(".container");
const refreshbtn = document.querySelector(".refresh-btn");

const maxPetterBoxes = 35;
const generatedPaletter = () => {
    container.innerHTML = "";
    for (let i = 0; i < maxPetterBoxes; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
        randomHex = `#${randomHex.padStart(6, 0)}`
        
        const color = document.createElement("li")
        color.classList.add("color")
        color.innerHTML = `
            <div class="rect-box" style="background: ${randomHex}"></div>
            <span class="hex-value">${randomHex}</span>`;
        color.addEventListener("click", () => copyColor(color, randomHex))
        container.appendChild(color)
    }

}   

refreshbtn.addEventListener("click", generatedPaletter)
const copyColor = (elem, hexValue) => {
    console.log(elem, hexValue)
}
generatedPaletter()
let url = "https://picsum.photos/300?random="

let imgContainer = document.querySelector(".img-container");
let btn = document.querySelector("#btn");

let numberImg = 6;

const generateImage = async () => {

    for (let index = 0; index < numberImg; index++) {
        btn.innerText = "Loading..."
        btn.disabled = true;
        let response = await fetch(`https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`);
    
        const card = document.createElement("div");
        card.className = "card"
    
        const newImgEl = document.createElement("img");
        newImgEl.src = response.url;
    
        const link = document.createElement("a");
        link.setAttribute("target","_blank");
        const icon = document.createElement("i");
        icon.className = "fa-solid fa-download";
        link.innerText = `Download `;
        link.href = response.url;
    
        imgContainer.appendChild(card).appendChild(newImgEl);
        card.appendChild(link);
        link.appendChild(icon);
    
        btn.innerText = "Show More";
        btn.disabled = false;
    }
}

generateImage();

btn.addEventListener("click", () => {
    generateImage();
})
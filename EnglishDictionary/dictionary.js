baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"

let inputBox = document.querySelector(".searchbar input");
let searchBtn = document.querySelector("#searchBtn");
let dictionaryItem = document.querySelector(".dictionaryItem");

let historyManager = document.querySelector(".historyManager");
let historyBtn = document.querySelector("#historyBtn");

let cleanHistory = document.querySelector(".cleanHistory");
let cleanBtn = document.querySelector("#cleanBtn");

const findWord = async () => {
    if(inputBox.value == ''){
       inputBox.classList.add("error");
       setTimeout(()=> {
           inputBox.classList.remove("error");
       }, 1000);
    }else{
        try{
            let inputValue = inputBox.value;
            let response = await fetch(`${baseUrl}${inputValue}`);
            let data = await response.json();
            showData(data);

            let item = document.createElement("p");
            item.innerText = inputBox.value;
            historyManager.appendChild(item);
            localStorage.setItem("history", historyManager.innerHTML);
        }catch{
            dictionaryItem.innerHTML = `
            <div class="notFind">
                <h2>Can't Find Word</h2>
                <p>Re-Enter The Word</p>
            </div>`
        }
    }
    inputBox.value = "";
    
}

function showNotes(){
    historyManager.innerHTML = localStorage.getItem("history");
}
showNotes();

const showData = (data) => {

    let word = data[0].word;
    let definition = data[0].meanings[0].definitions[0].definition;
    let example = data[0].meanings[0].definitions[0].example;
    let audio = new Audio(data[0].phonetics[0].audio);

    if (data[0].phonetics[0].audio == ''){
        audio = new Audio(data[0].phonetics[1].audio);
    }

    if (example === undefined) {
        example = "Not available";
    }

    dictionaryItem.innerHTML = `
    <div class="mainWord">
        <h2 id="word">${word}</h2>
        <button id="soundBtn"><i class="fa-solid fa-volume-high"></i></button>
    </div>

    <div class="definition">
        <p>${definition}</p>
    </div>
    
    <div class="example">
        <p>Example: ${example}</p>
    </div> `
    let soundBtn = document.querySelector("#soundBtn");
    soundBtn.addEventListener("click", () => {
        audio.play();
    })
}


searchBtn.addEventListener("click", ()=> {
    findWord();
})

inputBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter"){
        findWord();
    }
    
})
historyBtn.addEventListener("click", () => {
    if (historyManager.style.display == "block"){
        historyManager.style.display = "none";
        cleanHistory.style.display = "none";
    }else{
        historyManager.style.display = "block";
        cleanHistory.style.display = "block";
    }
})


cleanBtn.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
})



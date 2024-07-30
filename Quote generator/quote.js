// https://dummyjson.com/docs/quotes
let url = "https://dummyjson.com/quotes/random";

let quotes = document.querySelector(".quotes blockquote");
let author = document.querySelector(".quotes p");
let genBtn = document.querySelector("#generate-btn");
let copyBtn = document.querySelector("#copy-btn");


const generateQuotes = async () => {
    quotes.innerText = "Loading...."
    let response = await fetch(url);
    let data = await response.json();

    quotes.innerText = data.quote;
    author.innerText = "--by " + data.author;
}

const copyQuotes = () => {
    navigator.clipboard.writeText(quotes.innerText +"\n"+author.innerText);
    alert("copied");
}

genBtn.addEventListener("click", () => {
    generateQuotes();
})

copyBtn.addEventListener("click", () => {
    copyQuotes();
})
// let url = "https://official-joke-api.appspot.com/random_joke";
let url = "https://v2.jokeapi.dev/joke/Any?type=single";
let dadUrl = "https://icanhazdadjoke.com/";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

let joke = document.querySelector(".joke blockquote");
let jokeType = document.querySelector(".joke select");
let genBtn = document.querySelector("#generate-btn");
let copyBtn = document.querySelector("#copy-btn");

const jokeGenerator = async () => {
    joke.innerText = "Loading...."
    let response = await fetch(url);
    let data = await response.json();

    joke.innerText = data.joke;
}

const dadjokeGen = async () => {
    joke.innerText = "Dad Joke Loading...."
    let response = await fetch(dadUrl, requestOptions);
    let data = await response.json();

    joke.innerText = data.joke;
}

const copyQuotes = () => {
    navigator.clipboard.writeText(joke.innerText);
    alert("copied");
}

genBtn.addEventListener("click", () => {
    if(jokeType.value.toUpperCase() == "NORMAL JOKE"){
        jokeGenerator();
    }
    else{
        dadjokeGen();
    }
})

copyBtn.addEventListener("click", () => {
    copyQuotes();
})
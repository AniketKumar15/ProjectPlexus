let coins = document.querySelector(".coin img");
let btn = document.querySelector("#btn");



const tossCoin = () => {
    coins.classList.add("flip");
    btn.disabled = true;
    setTimeout(()=>{
        coins.classList.remove("flip");
        btn.disabled = false;
    }, 1000);
    
    let randomNumber = Math.floor(Math.random() * 10);

    if(randomNumber%2 == 0){
        coins.src = "./1.png";
    }else if(randomNumber%2 != 0){
        coins.src = "./2.png";
    }
}

btn.addEventListener("click", () =>{
    tossCoin();
})
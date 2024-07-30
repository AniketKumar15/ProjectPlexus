// Basic Element
let displayPassword = document.querySelector("#displayPassword");
let generatorBtn = document.querySelector("#generatorBtn");
let copyBtn = document.querySelector("#copyBtn");

// Slider Element 
let rangeSliderVal = document.querySelector("#range p");
let rangeSlider = document.querySelector("#range input");

// CheckBoxes
let nBox = document.querySelector("#Number input");
let sBox = document.querySelector("#Symbole input");
let uBox = document.querySelector("#UpperCase input");
let lBox = document.querySelector("#LowerCase input");

// password variables
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = upperCase.lowerCase;
let number = "0123456789"
let symbole = "!@#$%^&*()_-+[]{}?<>/,~"

let passwordLength = 0; //length of password
let password =''; //Store the actual password

// assign value
rangeSlider.value = rangeSlider.min;

const generatorPassWord = () => {
    // Assigning the password length to range slider
    passwordLength = rangeSlider.value;

    if(password != '') {
        password = '';
    }
    
    checkAllBox();
    
}

const checkAllBox = () =>{
    if(nBox.checked == false && sBox.checked == false && uBox.checked == false && lBox.checked == false){
        displayPassword.classList.add("error");
        setTimeout( () => {
            displayPassword.classList.remove("error");
        },1000)
        
    }else{
        generator();
    }
}

const generator = () => {

    let allchar = "";

    allchar += nBox.checked ? number : "" ;
    allchar += sBox.checked ? symbole : "" ;
    allchar += uBox.checked ? upperCase : "" ;
    allchar += lBox.checked ? lowerCase : "" ;

    for(let i = 0; i < passwordLength; i++){
        let random = Math.floor(Math.random() * allchar.length);
        password += allchar.charAt(random);
    }
    displayPassword.value = password;
}

const copyPassword = () => {
    if(password == ""){
       alert("Pls Generate the password first");
    }else{
        displayPassword.select();
        displayPassword.setSelectionRange(0, password.length);
        navigator.clipboard.writeText(displayPassword.value);
        alert(`password copied ${password}`);
    }
}

generatorBtn.addEventListener('click', () => {
    generatorPassWord();
})
rangeSlider.addEventListener("input", (event) => {
    rangeSliderVal.innerText = event.target.value;
});

copyBtn.addEventListener("click", () => {
    copyPassword();
})
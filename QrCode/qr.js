// api url
let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

// getting html element from qr.html
let inputBox = document.querySelector(".container input");
let generator_btn = document.querySelector("#generator-btn");
let qrImage = document.querySelector("#qrImage");
let imageBox = document.querySelector("#imageBox");
let downloadBtn = document.querySelector("#downloadbtn");
let deleteBtn = document.querySelector("#delete");

const qrCodeGen = async () => {
    let inputVal = inputBox.value;
    if(inputVal == ""){
        inputBox.classList.add("error");
        setTimeout(() => {
            inputBox.classList.remove("error");
        }, 1000)
    }else{
        qrImage.src = await "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputVal;
        imageBox.classList.add("show-img");
    }
}

const deleteInputText = () => {
    let inputVal = inputBox.value;

    if(inputVal != ""){
        inputBox.value = "";
        qrImage.src = "";
        imageBox.classList.remove("show-img");
    }else{
        alert("Input Box is already empty.")
    }
}

generator_btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    setTimeout(qrCodeGen,100);
})

downloadBtn.addEventListener("click", (evt) => {
    
    let inputVal = inputBox.value;
    if(inputVal == ""){
        evt.preventDefault();
        inputBox.classList.add("error");
        setTimeout(() => {
            inputBox.classList.remove("error");
        }, 1000)
    }else{
        downloadBtn.href = qrImage.src;
    }
})

deleteBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    deleteInputText();
})
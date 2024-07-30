let createBtn = document.querySelector("#createBtn");
let notesContainer = document.querySelector(".notesContainer");

function saveNotes() {
    localStorage.setItem("note", notesContainer.innerHTML);
}
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("note");
}
showNotes();

const createNotes = () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./trash-can-solid.svg";
    notesContainer.appendChild(inputBox).appendChild(img);
}

createBtn.addEventListener("click", () => {
    createNotes();
})

notesContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveNotes();
    }
    else if(e.target.tagName === "P"){
        let notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                saveNotes();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})


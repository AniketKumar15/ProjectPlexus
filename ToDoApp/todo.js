let inputBox = document.querySelector(".inputBox input");
let addBtn = document.querySelector(".inputBox button");
let toDoCard_container = document.querySelector(".toDoCard-container");

function saveToDo() {
    localStorage.setItem("toDoList", toDoCard_container.innerHTML);
}

function showToDo() {
    toDoCard_container.innerHTML = localStorage.getItem("toDoList");
}
showToDo();

const addToDoList = () => {
    if(inputBox.value == ''){
        alert("Enter To Do Work");
        return;
    }
    toDoValue = inputBox.value.toUpperCase();

    let toDoCard = document.createElement("div");
    toDoCard.className = "toDoCard";

    let inputDiv = document.createElement("div");
    let inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.className = "checkList";
    let p = document.createElement("p");
    p.innerHTML = toDoValue;

    let i = document.createElement("i");
    i.className = "fa-regular fa-circle-xmark";

    toDoCard_container.appendChild(toDoCard).appendChild(inputDiv);
    inputDiv.appendChild(inputCheckBox);
    inputDiv.appendChild(p);
    toDoCard.appendChild(i);

    inputBox.value = "";
    saveToDo();
}

toDoCard_container.addEventListener("click", (e) => {
    if (e.target.tagName === "I") {
        e.target.parentElement.remove();
        saveToDo();
    }
    else if (e.target.tagName === "INPUT"){
        // let p = document.querySelector("p");
        // let CheckBox = document.querySelector(".checkList");
        // CheckBox.style.backgroundColor = "green";
        // p.style.textDecoration = "line-through";
        e.target.disabled = true;
        e.target.style.backgroundColor = "green"
        e.target.parentElement.style.textDecoration = "line-through";
        saveToDo();
    }
})

addBtn.addEventListener("click",() => {
    addToDoList();
})

inputBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addToDoList();
    }
})

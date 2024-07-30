let sidebar_btn = document.querySelector("#sideMenu");
let cutBar = document.querySelector("#cut");
let sidebar = document.querySelector(".sideBar");
let sidebarLink = document.querySelectorAll(".sideBar a");

let projects = document.querySelectorAll(".box");


const showBar = () => {
    sidebar.style.display = 'flex';
}

sidebar_btn.addEventListener("click", () => {
    showBar();
})

cutBar.addEventListener("click", () => {
    sidebar.style.display = 'none';
})

for (let i = 0; i < sidebarLink.length; i++) {
    sidebarLink[i].addEventListener("click", () => {
        console.log("click");
        sidebar.style.display = 'none';
    })
}
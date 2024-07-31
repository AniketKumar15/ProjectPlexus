const apiKey = "ZyqtL9ZciCZLwa6nfEDITvSluZvK0aUhbXyYmx3BOTs";


let searchInput = document.querySelector("#searchInput");
let searchBtn = document.querySelector("#searchBtn");
let imgcontainer = document.querySelector(".img-container");
let showMore = document.querySelector("#showMore");

let pageNo = 1;

const searchImage = async () => {

    if(searchInput.value == ''){
        alert("Pls Enter Text");
        return;
    }

    let keyWord = searchInput.value;
    
    let apiUrl = `https://api.unsplash.com/search/photos?page=${pageNo}&query=${keyWord}&client_id=${apiKey}&per_page=12`;
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    

    if(pageNo === 1){
        imgcontainer.innerHTML = "";
    }
    
    const results = data.results;

    results.map((results)=>{
        let imgcard = document.createElement("div");
        imgcard.className = "imgcard";

        let img = document.createElement("img");
        img.src = results.urls.small;

        let atag = document.createElement("a");
        atag.href = results.links.download;
        atag.innerHTML = results.alt_description;
        atag.target = "_blank";
        atag.download = `Download`;

        imgcontainer.appendChild(imgcard);
        imgcard.appendChild(img);
        imgcard.appendChild(atag);
    })
    showMore.style.display="block";

    searchInput.value='';
}
searchBtn.addEventListener("click", () => {
    pageNo=1;
    searchImage();
})

searchInput.addEventListener("keypress", (e)=>{
    if(e.key == 'Enter'){
        pageNo = 1;
        searchImage();
    }
})
showMore.addEventListener("click", () => {
    pageNo++;
    searchImage();
})

// document.addEventListener('contextmenu', event => {
//     event.preventDefault();
// });
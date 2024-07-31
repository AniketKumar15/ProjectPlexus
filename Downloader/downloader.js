let inputFile = document.querySelector("#input");
let downloadBtn = document.querySelector("#downloadBtn");

const downloadFile = async () => {
    let url = inputFile.value;
    if(url == ""){
        alert("Pls Enter Url");
        return;
    }
    try{
        const response = await fetch(url);
        const file = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = new Date().getTime();
        link.click();
        
    }catch(error){
        alert("Unable to download File");
    }
    inputFile.value = "";
}

downloadBtn.addEventListener("click", () => {
    downloadFile();
})
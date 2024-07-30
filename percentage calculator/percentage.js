// what is p% of x
let percentInput = document.querySelector("#percent-val");
let numInput = document.querySelector("#num-val");
let vCalBtn = document.querySelector("#valueCal");
let vResult = document.querySelector("#valueResult");

// Y is What percent of X
let yInput = document.querySelector("#Y-val");
let xInput = document.querySelector("#X-val");
let pCalBtn = document.querySelector("#percentCal");
let pResult = document.querySelector("#percentResult");

const calculateValue = () => {
    const pValue = percentInput.value;
    const nValue = numInput.value
    let result;

    if(pValue == "" || nValue == "")
    {
        if(pValue == ""){
            percentInput.classList.add("error");
        }
        if(nValue == ""){
            numInput.classList.add("error");
        }

        setTimeout(()=>{
            percentInput.classList.remove("error");
            numInput.classList.remove("error");
        },1000);
    }
    else{
        if(pValue > 100)
        {
            alert("Pls enter valid percent value");
        }else{
            result = nValue/100 * pValue;
            vResult.value = result;
        }
    }
}

const calculatePercent = () => {
    const yValue = yInput.value;
    const xValue = xInput.value
    let result;

    if(yValue == "" || xValue == "")
    {
        if(yValue == ""){
            yInput.classList.add("error");
        }
        if(xValue == ""){
            xInput.classList.add("error");
        }
    
        setTimeout(()=>{
            yInput.classList.remove("error");
            xInput.classList.remove("error");
        },1000);
    }
    else{
        if(yValue > xValue)
        {
            alert("Y Value must be lower than X value");
        }else{
            result = yValue/xValue * 100;
            pResult.value = result;
        }
    }

}

vCalBtn.addEventListener("click", () => {
    calculateValue();
})
pCalBtn.addEventListener("click", () => {
    calculatePercent();
})
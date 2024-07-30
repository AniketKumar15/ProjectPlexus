let baseUrl = "https://latest.currency-api.pages.dev/v1/currencies/eur.json";
let flagUrl = "https://flagsapi.com/IN/flat/64.png";

let moneyInput = document.querySelector("#moneyInput");
let dropdowns = document.querySelectorAll(".selectContainer select");
let CalculateBtn = document.querySelector("#CalculateBtn");
let msg = document.querySelector(".msg")

let fromSelect = document.querySelector("#fromSelect")
let toSelect = document.querySelector("#toSelect");

for (let select of dropdowns){
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }

        select.append(newOption);
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc =  `https://flagsapi.com/${countryCode}/flat/64.png`;
    let flagImg = element.parentElement.querySelector("img");
    flagImg.src = newSrc;
}

const convertCurrency = async () => {
    let amount = moneyInput.value;
    if(amount === "" || amount < 1){
        amount = 1;
        moneyInput.value = "1";
    }

    CalculateBtn.innerText = "Loading....";
    let response = await fetch(`https://latest.currency-api.pages.dev/v1/currencies/${fromSelect.value.toLowerCase()}.json`);
    let data = await response.json();
    let exchangeRate = data[fromSelect.value.toLowerCase()][toSelect.value.toLowerCase()];
    
    let finalAmount = amount * exchangeRate;
    msg.innerText = `${amount}${fromSelect.value} = ${finalAmount.toFixed(2)}${toSelect.value}`;
    CalculateBtn.innerText = "Calculate Amount";
}

CalculateBtn.addEventListener("click", () => {
    convertCurrency();
})

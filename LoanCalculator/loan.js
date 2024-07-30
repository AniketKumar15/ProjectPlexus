let loanAmount = document.querySelector("#loanAmount");
let Irate = document.querySelector("#rate");
let payMonth = document.querySelector("#month");

let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

const calculate = () => {
    let amount = loanAmount.value;
    let rate = Irate.value;
    let month = payMonth.value;

    let pAmount = amount/100 * rate;
    let tAmount = parseFloat(amount) + parseFloat(pAmount);
    let payAmount = (tAmount/month).toFixed(2);
    result.innerText = `Monthly Payment: ${payAmount}`;
}

btn.addEventListener("click", () => {
    calculate();
})
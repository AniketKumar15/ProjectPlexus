let billAmount = document.querySelector(".bill-amount input");
let tipPre = document.querySelector(".tip-percentage input");
let btn = document.querySelector("form button");
let msg = document.querySelector(".msg");

const priceCalculate = () => {
    let billVal = billAmount.value;
    let tipVal = tipPre.value;

    let amount = billVal/100 * tipVal;
    let totalAmount =  parseFloat(billVal) + parseFloat(amount);
    
    msg.innerText = `Total Bill Amount :  ₹${totalAmount}`;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    priceCalculate();
});
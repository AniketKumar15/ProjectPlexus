let fromInput = document.querySelector("#fromInput input");
let toInput = document.querySelector("#toInput input");
let selectFrom = document.querySelector("#fromValue");
let selectTo = document.querySelector("#toValue");

let btn = document.querySelector("#calculate");

let unitList = [
    "Kelvin",
    "fahrenheit",
    "degreecelsius"
];

const getValues = () => {
    let fromVal = fromInput.value;
    let selectFromVal = selectFrom.value;
    let selectToVal = selectTo.value;

    if (fromVal == "") {
        fromInput.classList.add("error");
        setTimeout(() => {
            fromInput.classList.remove("error");
        }, 1000);
    } else {
        calculateTemp(fromVal, selectFromVal, selectToVal);
    }

}

const calculateTemp = (fromVal, selectFromVal, selectToVal) => {

    if (selectFromVal == selectToVal) {
        toInput.value = fromVal;
    }
    else if (selectFromVal == unitList[0]) {

        if (selectToVal == unitList[1]) {
            toInput.value = ((fromVal - 273.15) * 9/5 + 32).toFixed(2);
        }
        else if (selectToVal == unitList[2]) {
            toInput.value = (fromVal - 273.15).toFixed(2);
        }
    }
    else if (selectFromVal == unitList[1]) {

        if (selectToVal == unitList[0]) {
            toInput.value = ((fromVal - 32) * 5/9 + 273.15).toFixed(2);
        }
        else if (selectToVal == unitList[2]) {
            toInput.value = ((fromVal - 32) * 5/9).toFixed(2);
        }
    }
    else if (selectFromVal == unitList[2]) {

        if (selectToVal == unitList[0]) {
            toInput.value = ((fromVal - (-273.15))).toFixed(2);
        }
        else if (selectToVal == unitList[1]) {
            toInput.value = ((fromVal * 9/5) + 32).toFixed(2);
        }
    }
}

btn.addEventListener("click", () => {
    getValues();
})
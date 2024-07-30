let fromInput = document.querySelector("#fromInput input");
let toInput = document.querySelector("#toInput input");
let selectFrom = document.querySelector("#fromValue");
let selectTo = document.querySelector("#toValue");

let btn = document.querySelector("#calculate");

let unitList = [
    "gram",
    "Kilogram",
    "pound"
];

const getValues = () => {
    let fromVal = fromInput.value;
    let selectFromVal = selectFrom.value;
    let selectToVal = selectTo.value;

    if(fromVal == ""){
        fromInput.classList.add("error");
        setTimeout(()=>{
            fromInput.classList.remove("error");
        }, 1000);
    }else{
        calculateWeight(fromVal, selectFromVal, selectToVal);
    }
    
}

const calculateWeight = (fromVal, selectFromVal, selectToVal) => {

    if(selectFromVal == selectToVal){
        toInput.value = fromVal;
    }
    else if (selectFromVal == unitList[0]){

        if (selectToVal == unitList[1]){
            toInput.value = fromVal/1000;
        }
        else if (selectToVal == unitList[2]){
            toInput.value = (fromVal / 453.6).toFixed(7);
        }
    }
    else if (selectFromVal == unitList[1]) {

        if (selectToVal == unitList[0]) {
            toInput.value = fromVal * 1000;
        }
        else if (selectToVal == unitList[2]) {
            toInput.value = (fromVal * 2.205).toFixed(5);
        }
    }
    else if (selectFromVal == unitList[2]) {

        if (selectToVal == unitList[0]) {
            toInput.value = (fromVal * 453.6).toFixed(3);
        }
        else if (selectToVal == unitList[1]) {
            toInput.value = (fromVal / 2.205).toFixed(5);
        }
    }
}

btn.addEventListener("click", ()=> {
    getValues();
})
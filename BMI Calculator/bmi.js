let weightInput = document.querySelector("#weightInput");
let heightInput = document.querySelector("#heightInput");
let weightSelect = document.querySelector("#Weight-Unit");
let heightSelet = document.querySelector("#Height-Unit");
let calculateBtn = document.querySelector("#btn");
let bmiValue = document.querySelector("#bmiValue");
let msg = document.querySelector("#msg");

let result;

const calculateBmi = () => {
    let weightVal;
    let heightVal;

    if(heightInput.value == "" || weightInput.value == ""){
        if(heightInput.value == "" && weightInput.value == ""){
            heightInput.classList.add("error");
            weightInput.classList.add("error");
        }
        else if(weightInput.value == ""){
            weightInput.classList.add("error");
        }
        else if(heightInput.value == ""){
            heightInput.classList.add("error");
        }
        setTimeout(() => {
            heightInput.classList.remove("error");
            weightInput.classList.remove("error");
        }, 1000)
    }
    else{
         // For Heigth
        if(heightSelet.value.toUpperCase() === "MEATERS"){
            heightVal = heightInput.value;
    
        }
        else if(heightSelet.value.toUpperCase() === "FEETS"){
            heightVal = heightInput.value * 0.3048;
    
        }
        else if(heightSelet.value.toUpperCase() === "INCHES"){
            heightVal = heightInput.value * 0.0254;
    
        }
        else if(heightSelet.value.toUpperCase() === "CENTIMETERS"){
            heightVal = heightInput.value * 0.01;
    
        }
    
        // For Weight
        if(weightSelect.value.toUpperCase() === "KILOGRAM"){
            weightVal = weightInput.value;
    
        }
        else if(weightSelect.value.toUpperCase() === "POUNDS"){
            weightVal = weightInput.value * 0.453592;
    
        }
    
    
        result = weightVal / (heightVal * heightVal);
        bmiValue.innerText = result;
        BmiCategories();
    }

}

const BmiCategories = () => {
    if(result < 16){
        msg.innerText = `Weight Condition : Severely Underweight`;
        msg.style.color = "#FFE189";
    }
    else if(result >= 16 && result <= 18.4){
        msg.innerText = `Weight Condition : Underweight`;
        msg.style.color = "#FFE190";
    }
    else if(result >= 18.5 && result <= 24.9){
        msg.innerText = `Weight Condition : Normal Weight`;
        msg.style.color = "#8CD47E";
    }
    else if(result >= 25 && result <= 29.9){
        msg.innerText = `Weight Condition : Overweight`;
        msg.style.color = "#FFB54C";
    }
    else if(result >= 30 && result <= 34.9){
        msg.innerText = `Weight Condition : Morderately Obese`;
        msg.style.color = "#FF6A61";
    }
    else if(result >= 35 && result <= 39.9){
        msg.innerText = `Weight Condition : Severely Obese`;
        msg.style.color = "#FF6A61";
    }
    else if(result >= 40){
        msg.innerText = `Weight Condition : Morbidly Obese`;
        msg.style.color = "#FF6A61";
    }
}

calculateBtn.addEventListener("click", () => {
    calculateBmi();
})
    

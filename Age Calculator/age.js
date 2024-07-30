let input = document.querySelector(".input");
let btn = document.querySelector("#calculate");
let msg = document.querySelector(".age")

input.max = new Date().toISOString().split("T")[0];

const getDob = () => {
    let dobVal = input.value;

    if(dobVal === ""){
        alert("Pls Enter your Data of birth");
    }
    else{
        calculateAge(dobVal);
    }
}

const calculateAge = (dobVal) => {
    let birth = new Date(dobVal);
    let currDate = new Date();
    
    let birthDate = birth.getDate();
    let birthMonth = birth.getMonth()+1;
    let birthYear = birth.getFullYear();
    
    
    let currdate = currDate.getDate();
    let currMonth = currDate.getMonth()+1;
    let currYear = currDate.getFullYear();

    // let ageDate;
    let ageMonth;
    let ageYear

    // ageDate = currdate - birthDate;
    // if(birthMonth > currMonth) {
    //     ageYear--;
    //     ageMonth = (12 - birthMonth) + currMonth;
    // }
    // else{
    //     ageMonth = currMonth - birthMonth;
    // }
    ageMonth = currMonth - birthMonth;
    ageYear = currYear - birthYear;

    if (ageMonth < 0 || (ageMonth === 0 && currdate < birthDate)) {
        ageYear--;
    }

    if(ageMonth < 0){
        ageMonth *= -1;
    }

    console.log("curr = ", currdate, currMonth, currYear);
    console.log("birth = ", birthDate, birthMonth, birthYear);
    msg.innerText = `You are ${ageYear} ${ageYear > 1 ? "years" : "year"} old`;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    getDob();
})
// ---------- Start Of Age Calculator --------------------
const userInputDate = document.getElementById("dateField");
const btnCalculate = document.getElementById("btnCalc");
const DisplayAge = document.getElementById("displayAge")

userInputDate.max = new Date().toISOString().split("T")[0];
btnCalculate.addEventListener("click", calculateAge)

function calculateAge() {
    // --------- Date Of Birth's User ---------
    const dateOfBirth = new Date(userInputDate.value);
    let birthDay = dateOfBirth.getDate();
    let birthMonth = dateOfBirth.getMonth() + 1;
    let birthYear = dateOfBirth.getFullYear();
    // ----------- Date Of Today -----------
    const dateOfToday = new Date();
    let Today = dateOfToday.getDate();
    let thisMonth = dateOfToday.getMonth() + 1;
    let thisYear = dateOfToday.getFullYear();
    // ----------- Age Numbers -----------
    let daysAge, monthsAge, yearsAge;
    yearsAge = thisYear - birthYear;

    if (thisMonth >= birthMonth) {
        monthsAge = thisMonth - birthMonth;
    } else {
        birthYear--;
        monthsAge = 12 + thisMonth - birthMonth;
    }

    if (Today >= birthDay) {
        daysAge = Today - birthDay;
    } else {
        birthMonth--;
        daysAge = 30 + Today - birthDay;
    }

    if (thisMonth < 0) {
        thisMonth = 11;
        thisYear--;
    }
    DisplayAge.innerHTML = `Yor are <span class="ageCalculator__yearsNumber">${yearsAge}</span> years , <span class="ageCalculator__monthsNumber">${monthsAge}</span> months and <span class="ageCalculator__daysNumber">${daysAge}</span> days old ! `
}
//------------ End Of Age Calculator -------------------- 


//------------ Start Of Analog Clock -------------------- 
const hourElement = document.getElementById("hourCircle");
const minuteElement = document.getElementById("minuteCircle");
const secondElement = document.getElementById("secondCircle");

setInterval(() => {
    // ---------- Analog Clock ----------
    const day = new Date();
    const hourValue = day.getHours() * 30;
    const minuteValue = day.getMinutes() * 6;
    const secondValue = day.getSeconds() * 6;

    hourElement.style.transform = `rotateZ(${hourValue + (minuteValue / 12)}deg)`;
    minuteElement.style.transform = `rotateZ(${minuteValue}deg)`;
    secondElement.style.transform = `rotateZ(${secondValue}deg)`;

    // ---------- Digital Clock ----------
    const hoursDigitalElement = document.getElementById("hours");
    const minutesDigitalElement = document.getElementById("minutes");
    const secondsDigitalElement = document.getElementById("seconds");
    const Am_PmDigitalElement = document.getElementById("am_pm");

    let D_HoursElValue = day.getHours();
    const D_MinutesElValue = day.getMinutes();
    const D_SecondsElValue = day.getSeconds();

    hoursDigitalElement.innerHTML = D_HoursElValue;
    minutesDigitalElement.innerHTML = D_MinutesElValue;
    secondsDigitalElement.innerHTML = D_SecondsElValue;

    D_HoursElValue >= 12 ?  Am_PmDigitalElement.innerHTML = "PM" : null ;
    D_HoursElValue >= 13 ?  D_HoursElValue = D_HoursElValue - 12 : null ;
    
    D_SecondsElValue < 10 ? secondsDigitalElement.innerHTML = "0" + `${D_SecondsElValue}` : null  ;
    D_MinutesElValue < 10 ?  minutesDigitalElement.innerHTML = "0" + `${D_MinutesElValue}` : null ;
    D_HoursElValue < 10 ? hoursDigitalElement.innerHTML = "0" + `${D_HoursElValue}` : null ;    
})
//------------ End Of Analog Clock --------------------- 
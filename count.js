let isian = document.getElementById('formisi');


isian.addEventListener("submit", (e) => {
    e.preventDefault();

let inputDate = document.getElementById('dayinput').value;
let inputMonth = document.getElementById('monthinput').value;
let inputYear = document.getElementById('yearinput').value;
let leapYear = false;
let resultYears = document.getElementById('stripYears');
let resultMonths = document.getElementById('stripMonths');
let resultDays = document.getElementById('stripDays');
let finalYears = document.getElementById('resultYear');
let finalMonths = document.getElementById('resultMonth');
let finalDays = document.getElementById('resultDay');



const dayOfMonth = {
    1 : 30,
    2 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11 : 30,
    12: 31
}


// Create a new Date object
const currentDate = new Date();

// Get the current year
const currentYear = currentDate.getFullYear();

// Log the current year to the console
//console.log("Current Year:", currentYear);
//console.log('Current Date:', currentDate);


// Get the current month (zero-based index)
const currentMonthIndex = currentDate.getMonth();

// Get the current month as a number starting from 1
const currentMonthNumber = currentMonthIndex + 1;

// Log the current month to the console
//console.log("Current Month:", currentMonthNumber);

// Get current date
const nowDate=currentDate.getDate();
//console.log('Current Date:', nowDate);



//add styling
function red(id){
    let merah = document.getElementById(id);
    merah.style.color = 'red';
}
function messageError(id,msg){
    let msgErr=document.getElementById(id);
    msgErr.textContent=msg;
}

//reset styling
function resetRed(id){
    let merah = document.getElementById(id);
    merah.style.color = '';

}
function resetMessageError(id){
    let msgErr=document.getElementById(id);
    msgErr.textContent='';
}


//is date it the future ?
function futureDate(){
if(inputYear == currentYear){
    if(inputMonth == currentMonthNumber) {
        if(inputDate > nowDate){
            red('hari');
            messageError('alertday','Must be a valid Date');
            return false;
        }
    }
    if(inputMonth > currentMonthNumber){
        red('bulan');
        messageError('alertmonth','Must be a valid Month');
        return false;
    } else {
        return true;
    }
} else {
    return true;
}
}

//leapYear check
switch (inputYear != "") {
    case (inputYear % 400 == 0):
        leapYear = true;
        dayOfMonth[2] = 29;
        break;
    case ((inputYear % 4 == 0) && (inputYear % 100 != 0)):
        leapYear = true;
        dayOfMonth[2] = 29;
        break;
    
}




//Date validation
function validDate(){
switch (true){
    case (inputDate == ""):
        resetRed('hari')
        red('hari');
        messageError('alertday','This field is required');
        return false;
        break;
    case (isNaN(inputDate)):
    case Number(inputDate) <= 0:   
    case Number(inputDate) > 31:
        red('hari');
        messageError('alertday','Must be a valid Date');
        return false;
        break;
    case (inputDate > dayOfMonth[inputMonth]):
        red('hari');
        messageError('alertday','Must be a valid Date');
        return false;
        break;
    default:
        resetRed('hari');
        resetMessageError('alertday');
        return true;
        break;
}  }
    
//Month validation    
function validMonth(){
switch (true){
    case (inputMonth == ""):
            red('bulan');
            messageError('alertmonth','This field is required');
            return false;
            break;
    case (isNaN(inputMonth)):
    case Number(inputMonth) <= 0:   
    case Number(inputMonth) > 12:
            red('bulan');
            messageError('alertmonth','Must be a valid Month');
            return false;
            break;
    default:
            resetRed('bulan');
            resetMessageError('alertmonth');
            return true;
            break;
} }
    
//Year validation
function validYear(){
switch (true){
    case (inputYear == ""):
        red('tahun');
        messageError('alertyear','This field is required');
        return false;
        break;
    case (isNaN(inputYear)):
    case Number(inputYear) <= 0:   
    case Number(inputYear) > currentYear:
        red('tahun');
        messageError('alertyear','Must be a valid Year');
        return false;
        break;
    default:
        resetRed('tahun');
        resetMessageError('alertyear')
        return true;
        break;

}    }

futureDate();
validDate();
validMonth();
validYear();




if (futureDate() && validDate() && validMonth() && validYear()){
    function toArray(angka){
        let rounded=angka.toFixed(3);
        let roundedString=rounded.toString();
        let roundedArray=roundedString.split('.');
        return roundedArray;
    }


    const parsedDate = new Date(`${inputMonth}-${inputDate}-${inputYear}`);
    const timeDifference = currentDate - parsedDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const yearDifference = daysDifference / 365.25;
    let tahun = toArray(yearDifference);
    let bulanMentah=tahun[1]/1000 * 12;
    let bulan= toArray(bulanMentah);
    let hariMentah=bulan[1]/1000 * 30;
    let hari=toArray(hariMentah);


    resultYears.style.display= 'none';
    finalYears.style.display = 'inline';
    finalYears.textContent=tahun[0];

    resultMonths.style.display= 'none';
    finalMonths.style.display= 'inline';
    finalMonths.textContent=bulan[0];

    resultDays.style.display= 'none';
    finalDays.style.display= 'inline';
    finalDays.textContent=hari[0];





}else {
    resultYears.style.display='inline';
    finalYears.style.display ='none';

    resultMonths.style.display='inline';
    finalMonths.style.display='none';

    resultDays.style.display='inline';
    finalDays.style.display='none';
    


}



})
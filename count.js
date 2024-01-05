let isian = document.getElementById('formisi');


isian.addEventListener("submit", (e) => {
    e.preventDefault();

let inputDate = document.getElementById('dayinput').value;
let inputMonth = document.getElementById('monthinput').value;
let inputYear = document.getElementById('yearinput').value;
let leapYear = false;

// Create a new Date object
const currentDate = new Date();

// Get the current year
const currentYear = currentDate.getFullYear();

// Log the current year to the console
console.log("Current Year:", currentYear);
console.log('Current Date:', currentDate);


// Get the current month (zero-based index)
const currentMonthIndex = currentDate.getMonth();

// Get the current month as a number starting from 1
const currentMonthNumber = currentMonthIndex + 1;

// Log the current month to the console
console.log("Current Month:", currentMonthNumber);

// Get current date
const nowDate=currentDate.getDate();
console.log('Current Date:', nowDate);



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



//Date validation
switch (true){
    case (inputDate == ""):
        resetRed('hari')
        red('hari');
        messageError('alertday','This field is required');
        break;
    case (isNaN(inputDate)):
    case Number(inputDate) <= 0:   
    case Number(inputDate) > 31:
        red('hari');
        messageError('alertday','Must be a valid Day');
        break;
    default:
        resetRed('hari');
        resetMessageError('alertday')
        console.log(' date ok');
        break;
}  
    
//Month validation    
switch (true){
    case (inputMonth == ""):
            red('bulan');
            messageError('alertmonth','This field is required');
            break;
    case (isNaN(inputMonth)):
    case Number(inputMonth) <= 0:   
    case Number(inputMonth) > 12:
            red('bulan');
            messageError('alertmonth','Must be a valid Month');
            break;
    default:
            resetRed('bulan');
            resetMessageError('alertmonth')
            console.log('month ok');
            break;
}
    
//Year validation
switch (true){
    case (inputYear == ""):
        red('tahun');
        messageError('alertyear','This field is required');
        break;
    case (isNaN(inputYear)):
    case Number(inputYear) <= 0:   
    case Number(inputYear) > currentYear:
        red('tahun');
        messageError('alertyear','Must be a valid Year');
        break;
    default:
        resetRed('tahun');
        resetMessageError('alertyear')
        console.log('year ok');
        break;

}    


switch(inputYear == currentYear){
    case (inputMonth > currentMonthNumber):
        alert('Error: Date in the Future');
        break;
    case (inputDate > nowDate):
        alert('Error: Date in the Future');
        break;
}
    
//leapYear validation
switch (true) {
    case (inputYear % 400 == 0):
        leapYear = true;
        break;
    case ((inputYear % 4 == 0) && (inputYear % 100 != 0)):
        leapYear = true;
        break;
    
}

console.log(leapYear)

})
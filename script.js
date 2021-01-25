//get today's date for the header
function getTodaysDate() {
    var currentDate = moment().format('dddd MMM DD[,] YYYY');
    console.log(moment());
    $("#currentDay").text(currentDate);
}


//save data to localStorage
// function saveReminders() {
//     localStorage.setItem("theDay", JSON.stringify(theDay));
// }

//display reminders in localStorage to cooresponding hour
// function showReminders() {
//     theDay.forEach(function (aHour) {
//         $(`#${aHour.id}`).val(aHour.reminder);
//     })
// }

//set existing localStorage data to view if it exists
// function init() {
//     var storage = JSON.parse(localStorage.getItem("theDay"));

//     if (storage) {
//         theDay = storage;
//     }

//     saveReminders();
//     showReminders();
// }

//display today's date in header
getTodaysDate();
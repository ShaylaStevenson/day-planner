$(document).ready(function() {

    //show date in header using Momentjs
    function getTodaysDate() {
        var currentDate = moment().format('dddd MMM DD[,] YYYY');
        $('#currentDay').text(currentDate);
    }
    //will be used to check if hour is in past or future
    var currentTime = moment().format("H");
    console.log(currentTime);
















})
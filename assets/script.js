$(document).ready(function() {

    //show date in header using Momentjs
    function getTodaysDate() {
        var currentDate = moment().format('dddd MMM DD[,] YYYY');
        $('#currentDay').text(currentDate);
    }
    getTodaysDate();

    //will be used to check if hour is in past or future
    var currentTime = moment().format("H");
    console.log(currentTime);

    var hourRowsArray = [];
    hourRowsArray = $(".row");
    console.log(hourRowsArray);

    //assign classes to past, present, future using the value attribute
    $(".description").each(function() {
        var value = parseInt($(this).attr("value"));

        if (value < currentTime) {
            $(this).addClass("past");
        }
        else if (value == currentTime) {
            $(this).addClass("present")
        }
        else {
            $(this).addClass("future")
        }
    });
    

















})
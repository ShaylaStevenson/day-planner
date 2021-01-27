$(document).ready(function() {

    //get id's associated with text input and save to key value pair cooresponding with hour
    // var hourlyEvents = [{
    // "nineEvents": $("#nine"),
    // "tenEvents": $("#ten"),
    // "elevenEvents": $("#eleven"),
    // "twelveEvents": $("#twelve"),
    // "oneEvents": $("#one"),
    // "twoEvents": $("#two"),
    // "threeEvents": $("#three"),
    // "fourEvents": $("#four"),
    // "fiveEvents": $("#five")
    // }]

    // var eventsText = JSON.parse(hourlyEvents);
    
    //hourlyEvents or eventsText?
    //$(".saveBtn").on("click", function() {
    //  for (var = i; i < eventsText; i++) {}
    // }



    //GOOD CODE BELOW

    //save text input to variables
    var nineEvents = $("#nine");
    var tenEvents = $("#ten");
    var elevenEvents = $("#eleven");
    var twelveEvents = $("#twelve");
    var oneEvents = $("#one");
    var twoEvents = $("#two");
    var threeEvents = $("#three");
    var fourEvents = $("#four");
    var fiveEvents = $("#five");

    //get previously stored events to display in cooresponding row
    nineEvents.append(localStorage.getItem("9"));
    tenEvents.append(localStorage.getItem("10"));
    elevenEvents.append(localStorage.getItem("11"));
    twelveEvents.append(localStorage.getItem("12"));
    oneEvents.append(localStorage.getItem("1"));
    twoEvents.append(localStorage.getItem("2"));
    threeEvents.append(localStorage.getItem("3"));
    fourEvents.append(localStorage.getItem("4"));
    fiveEvents.append(localStorage.getItem("5"));

    //set user's input to storage onclick
    $(".saveBtn").on("click", function() {
        localStorage.setItem("9", (nineEvents.val()));
        localStorage.setItem("10", (twoEvents.val()));
        localStorage.setItem("11", (elevenEvents.val()));
        localStorage.setItem("12", (twelveEvents.val()));
        localStorage.setItem("1", (oneEvents.val()));
        localStorage.setItem("2", (twoEvents.val()));
        localStorage.setItem("3", (threeEvents.val()));
        localStorage.setItem("4", (fourEvents.val()));
        localStorage.setItem("5", (fiveEvents.val()));
    })

    var hourRowsArray = [];
    hourRowsArray = $(".row");
    console.log(hourRowsArray);


    //show date in header using Momentjs
    function getTodaysDate() {
        var currentDate = moment().format('dddd MMM DD[,] YYYY');
        $('#currentDay').text(currentDate);
    }
    getTodaysDate();

    //will be used to check if hour is in past or future
    var currentTime = moment().format("H");
    console.log(currentTime);

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
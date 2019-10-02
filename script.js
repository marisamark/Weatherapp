$(document).ready(function () {
    console.log("Here!");

});

// ======== Handling Click ========
function saveInfo() {
    console.log(this)
    city = $(this).attr("data-city")
    var input = $(city).text()
    setLocal(city,input)    
}

// ===== Appending cities searched ======

function appendcitylist(city) {
    var cityDiv = $("#citylist").text()
        $("#citylist").append($(`<div>${city}</div>`));
        }

// ======== Local Storage ========

function getLocal(city,input) {
    var cityDivdata = localStorage.getItem('cityDiv');
    localStorage.getItem(city, input)
    console.log(getLocal())
}
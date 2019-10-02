$(document).ready(function () {
    console.log("Here!")

});
// ======== Local Storage ========
function getLocal() {
}

function saveLocal(city, input) {
    localStorage.setItem(city, input)
}

// ======== Handling Click ========
function saveInfo() {
    console.log(this)
    city = $(this).attr("data-city")
    var input = $(city).text()
    saveLocal(city,input)    
}

// ===== Appending cities searched ======

function appendcitylist(city) {
    var cityDiv = $("#citylist")
        $("#citylist").append($(`<div>${city}</div>`));
    }

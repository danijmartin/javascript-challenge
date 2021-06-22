// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Build the table with data stored in data.js
tableData.forEach(function(ufoSightings) {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Build filter options
var dates = new Set(tableData.map(date => date.datetime));
console.log(dates)
dates.forEach(function(date) {
    d3.select("#dateSelect").append("option").text(date);
})


// Activate Filter Button

// 1. Select Button and Form
var button = d3.select("#filter-btn");

// 2. Create Event Handler
button.on("click", filterDate);

// 3. Create the function to run event
function filterDate() {

    // Grab input element
    var inputElement = d3.select(".form-control");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // console.log(inputValue) - Used to check code

    // Filter data using inputValue if inputValue not empty
    if (inputValue !== "") {
        var filteredData = tableData.filter(input => input.datetime === inputValue);
    }
    else 
        {var filteredData = tableData;
    }
    // console.log(filteredData) - Used to check code

    // Clear previous table
    tbody.selectAll('tr').remove();

    // Add note to user if filter comes back empty
    var userNote = d3.select("#table-area")

    if (filteredData.length === 0) {
        userNote.append("h5").text("I'm sorry, your filter selection did not match any results. Please check your formatting and date selection and try again.");
    }
    else {
        userNote.select("h5").remove();
    }

    // Rebuild table with filtered Data
    filteredData.forEach(function(ufoSightings) {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
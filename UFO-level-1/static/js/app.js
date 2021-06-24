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

// Build filter search
let dates = new Set(tableData.map(date => date.datetime));
// console.log(dates) - code testing purposes
dates.forEach(function(date) {
    d3.select("#dateSelect").append("option").attr("class", "value").text(date);
})

// Activate Filter Button

// 1. Select filter
var filter = d3.select("#dateSelect");

// 2. Create Event Handler
filter.on("change", filterDate);

// 3. Create the function to run event
function filterDate() {

    // Get the value property of the input element
    var inputValue = d3.select("#dateSelect").property("value");
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

    // Rebuild table with filtered Data
    filteredData.forEach(function(ufoSightings) {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
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

// Build standard filter options
let dates = new Set(tableData.map(date => date.datetime));
// console.log(dates) - code testing purposes
dates.forEach(function(date) {
    d3.select("#dateSelect").append("option").attr("class", "value").text(date);
})

let countries = new Set(tableData.map(country => country.country));
// console.log(countries) - code testing purposes
countries.forEach(function(country) {
    d3.select("#countrySelect").append("option").attr("class", "value").text(country);
})

let states = new Set(tableData.map(state => state.state));
// console.log(states) - code testing purposes
states.forEach(function(state) {
    d3.select("#stateSelect").append("option").attr("class", "value").text(state);
})

let cities = new Set(tableData.map(city => city.city));
// console.log(cities) - code testing purposes
cities.forEach(function(city) {
    d3.select("#citySelect").append("option").attr("class", "value").text(city);
})

let shapes = new Set(tableData.map(shape => shape.shape));
// console.log(shapes) - code testing purposes
shapes.forEach(function(shape) {
    d3.select("#shapeSelect").append("option").attr("class", "value").text(shape);
})

// Interactive Filter Searches
// Setting up references for each input element
var dateSelected = d3.select("#dateSelect");
var countrySelected = d3.select("#countrySelect");
var stateSelected = d3.select("#stateSelect");
var citySelected = d3.select("#citySelect");
var shapeSelected = d3.select("#shapeSelect");

//If date selected, filter all other fields
dateSelected.on("change", function() {
    var filterDate = d3.event.target.value;
    // console.log(filterDate); - code testing purposes
    let filteredData = tableData.filter(date => date.datetime === filterDate);
    // console.log(filteredData); - code testing purposes
    // Empty other options
    countrySelected.selectAll(".value").remove()
    stateSelected.selectAll(".value").remove()
    citySelected.selectAll(".value").remove()
    shapeSelected.selectAll(".value").remove()
    // Refill with filtered data
    let countries = new Set(filteredData.map(country => country.country));
    countries.forEach(function(country) {
        d3.select("#countrySelect").append("option").attr("class", "value").text(country);
    })

    let states = new Set(filteredData.map(state => state.state));
    states.forEach(function(state) {
        d3.select("#stateSelect").append("option").attr("class", "value").text(state);
    })

    let cities = new Set(filteredData.map(city => city.city));
    cities.forEach(function(city) {
        d3.select("#citySelect").append("option").attr("class", "value").text(city);
    })

    let shapes = new Set(filteredData.map(shape => shape.shape));
    shapes.forEach(function(shape) {
        d3.select("#shapeSelect").append("option").attr("class", "value").text(shape);
    })
});

//If country selected, filter all other fields
countrySelected.on("change", function() {
    var filterCountry = d3.event.target.value;
    // console.log(filterCountry); - code testing purposes
    let filteredData = tableData.filter(country => country.country === filterCountry);
    // console.log(filteredCountry); - code testing purposes
    // Empty other options
    dateSelected.selectAll(".value").remove()
    stateSelected.selectAll(".value").remove()
    citySelected.selectAll(".value").remove()
    shapeSelected.selectAll(".value").remove()
    // Refill with filtered data
    let dates = new Set(filteredData.map(date => date.datetime));
    dates.forEach(function(date) {
        d3.select("#dateSelect").append("option").attr("class", "value").text(date);
    })

    let states = new Set(filteredData.map(state => state.state));
    states.forEach(function(state) {
        d3.select("#stateSelect").append("option").attr("class", "value").text(state);
    })

    let cities = new Set(filteredData.map(city => city.city));
    cities.forEach(function(city) {
        d3.select("#citySelect").append("option").attr("class", "value").text(city);
    })

    let shapes = new Set(filteredData.map(shape => shape.shape));
    shapes.forEach(function(shape) {
        d3.select("#shapeSelect").append("option").attr("class", "value").text(shape);
    })
});

// Activate Filter Button

// 1. Select Button and Form
var button = d3.select("#filter-btn");

// 2. Create Event Handler
// button.on("click", filterDate);

// // 3. Create the function to run event
// function filterDate() {

//     // Grab input element
//     var inputElement = d3.select(".form-control");

//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");
//     // console.log(inputValue) - Used to check code

//     // Filter data using inputValue if inputValue not empty
//     if (inputValue !== "") {
//         var filteredData = tableData.filter(input => input.datetime === inputValue);
//     }
//     else 
//         {var filteredData = tableData;
//     }
//     // console.log(filteredData) - Used to check code

//     // Clear previous table
//     tbody.selectAll('tr').remove();

//     // Add note to user if filter comes back empty
//     var userNote = d3.select("#table-area")

//     if (filteredData.length === 0) {
//         userNote.append("h5").text("I'm sorry, your filter selection did not match any results. Please check your formatting and date selection and try again.");
//     }
//     else {
//         userNote.select("h5").remove();
//     }

//     // Rebuild table with filtered Data
//     filteredData.forEach(function(ufoSightings) {
//         var row = tbody.append("tr");
//         Object.entries(ufoSightings).forEach(([key, value]) => {
//             var cell = row.append("td");
//             cell.text(value);
//         });
//     });
// }
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

// // Interactive Filter Searches
// // Setting up references for each input element
// var dateSelected = d3.select("#dateSelect");
// var countrySelected = d3.select("#countrySelect");
// var stateSelected = d3.select("#stateSelect");
// var citySelected = d3.select("#citySelect");
// var shapeSelected = d3.select("#shapeSelect");

// //If date selected, filter all other fields
// dateSelected.on("change", function() {
//     var filterDate = d3.event.target.value;
//     console.log(filterDate);
//     let filteredData = tableData.filter(date => date.datetime === filterDate);

//     // console.log(filteredData); - code testing purposes
//     // Empty other options if event not triggered and refill data
//     if (typeof filterCountry === 'undefined') {
//         countrySelected.selectAll(".value").remove();
//         let countries = new Set(filteredData.map(country => country.country));
//         countries.forEach(function(country) {
//             d3.select("#countrySelect").append("option").attr("class", "value").text(country);
//         })
//     }

//     if (typeof filterState === 'undefined') {
//         stateSelected.selectAll(".value").remove();
//         let states = new Set(filteredData.map(state => state.state));
//         states.forEach(function(state) {
//             d3.select("#stateSelect").append("option").attr("class", "value").text(state);
//         })
//     }

//     if (typeof filterCity === 'undefined') {
//         citySelected.selectAll(".value").remove();
//         let cities = new Set(filteredData.map(city => city.city));
//         cities.forEach(function(city) {
//             d3.select("#citySelect").append("option").attr("class", "value").text(city);
//         })
//     }

//     if (typeof filterShape === 'undefined') {
//         shapeSelected.selectAll(".value").remove();
//         let shapes = new Set(filteredData.map(shape => shape.shape));
//         shapes.forEach(function(shape) {
//             d3.select("#shapeSelect").append("option").attr("class", "value").text(shape);
//         })
//     }
// });

// //If country selected, filter all other fields
// countrySelected.on("change", function() {
//     var filterCountry = d3.event.target.value;
//     console.log(filterCountry);
//     let filteredData = tableData.filter(country => country.country === filterCountry);
//     // console.log(filteredCountry); - code testing purposes
//     // Empty other options
//     dateSelected.selectAll(".value").remove()
//     stateSelected.selectAll(".value").remove()
//     citySelected.selectAll(".value").remove()
//     shapeSelected.selectAll(".value").remove()
//     // Refill with filtered data
//     let dates = new Set(filteredData.map(date => date.datetime));
//     dates.forEach(function(date) {
//         d3.select("#dateSelect").append("option").attr("class", "value").text(date);
//     })

//     let states = new Set(filteredData.map(state => state.state));
//     states.forEach(function(state) {
//         d3.select("#stateSelect").append("option").attr("class", "value").text(state);
//     })

//     let cities = new Set(filteredData.map(city => city.city));
//     cities.forEach(function(city) {
//         d3.select("#citySelect").append("option").attr("class", "value").text(city);
//     })

//     let shapes = new Set(filteredData.map(shape => shape.shape));
//     shapes.forEach(function(shape) {
//         d3.select("#shapeSelect").append("option").attr("class", "value").text(shape);
//     })
// });

// //If state selected, filter all other fields
// stateSelected.on("change", function() {
//     var filterState = d3.event.target.value;
//     console.log(filterState)
//     let filteredData = tableData.filter(state => state.state === filterState);
//     // Empty other options
//     dateSelected.selectAll(".value").remove()
//     countrySelected.selectAll(".value").remove()
//     citySelected.selectAll(".value").remove()
//     shapeSelected.selectAll(".value").remove()
//     // Refill with filtered data
//     let dates = new Set(filteredData.map(date => date.datetime));
//     dates.forEach(function(date) {
//         d3.select("#dateSelect").append("option").attr("class", "value").text(date);
//     })

//     let countries = new Set(filteredData.map(country => country.country));
//     countries.forEach(function(country) {
//         d3.select("#countrySelect").append("option").attr("class", "value").text(country);
//     })

//     let cities = new Set(filteredData.map(city => city.city));
//     cities.forEach(function(city) {
//         d3.select("#citySelect").append("option").attr("class", "value").text(city);
//     })

//     let shapes = new Set(filteredData.map(shape => shape.shape));
//     shapes.forEach(function(shape) {
//         d3.select("#shapeSelect").append("option").attr("class", "value").text(shape);
//     })
// });

// //If city selected, filter all other fields
// citySelected.on("change", function() {
//     var filterCity = d3.event.target.value;
//     console.log(filterCity)
//     let filteredData = tableData.filter(city => city.city === filterCity);
//     // Empty other options
//     dateSelected.selectAll(".value").remove()
//     countrySelected.selectAll(".value").remove()
//     stateSelected.selectAll(".value").remove()
//     shapeSelected.selectAll(".value").remove()
//     // Refill with filtered data
//     let dates = new Set(filteredData.map(date => date.datetime));
//     dates.forEach(function(date) {
//         d3.select("#dateSelect").append("option").attr("class", "value").text(date);
//     })

//     let countries = new Set(filteredData.map(country => country.country));
//     countries.forEach(function(country) {
//         d3.select("#countrySelect").append("option").attr("class", "value").text(country);
//     })

//     let states = new Set(filteredData.map(state => state.state));
//     states.forEach(function(state) {
//         d3.select("#stateSelect").append("option").attr("class", "value").text(state);
//     })

//     let shapes = new Set(filteredData.map(shape => shape.shape));
//     shapes.forEach(function(shape) {
//         d3.select("#shapeSelect").append("option").attr("class", "value").text(shape);
//     })
// });

// //If shape selected, filter all other fields
// shapeSelected.on("change", function() {
//     var filterShape = d3.event.target.value;
//     console.log(filterShape)
//     let filteredData = tableData.filter(shape => shape.shape === filterShape);
//     // Empty other options
//     dateSelected.selectAll(".value").remove()
//     countrySelected.selectAll(".value").remove()
//     stateSelected.selectAll(".value").remove()
//     citySelected.selectAll(".value").remove()
//     // Refill with filtered data
//     let dates = new Set(filteredData.map(date => date.datetime));
//     dates.forEach(function(date) {
//         d3.select("#dateSelect").append("option").attr("class", "value").text(date);
//     })

//     let countries = new Set(filteredData.map(country => country.country));
//     countries.forEach(function(country) {
//         d3.select("#countrySelect").append("option").attr("class", "value").text(country);
//     })

//     let states = new Set(filteredData.map(state => state.state));
//     states.forEach(function(state) {
//         d3.select("#stateSelect").append("option").attr("class", "value").text(state);
//     })

//     let cities = new Set(filteredData.map(city => city.city));
//     cities.forEach(function(city) {
//         d3.select("#citySelect").append("option").attr("class", "value").text(city);
//     })
// });

// Activate Filter Button

// 1. Select Button and Form
var button = d3.select("#filter-btn");

// 2. Create Event Handler
button.on("click", filterTable);

// 3. Create the function to run event
function filterTable() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Grab input values
    let filterValues = [
    {datetime: d3.select(".dateSelect").property("value")},
    {country: d3.select(".countrySelect").property("value")},
    {state: d3.select(".stateSelect").property("value")},
    {city: d3.select(".citySelect").property("value")},
    {shape: d3.select(".shapeSelect").property("value")}
    ];
    
    let filteredData = tableData

    // Loop through filterValues
    filterValues.forEach(function(item) {
        if (item.value !== "") {
            filteredData = filteredData.filter(input => input[item.key] ===item.value);
        };
    });

    console.log(filteredData)

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
}
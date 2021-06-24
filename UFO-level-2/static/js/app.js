// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Build starter page
function starterPage() {
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
};

// Interactive Filter Searches
// Setting up references for each input element
var dateSelect = d3.select("#dateSelect");
var countrySelect = d3.select("#countrySelect");
var stateSelect = d3.select("#stateSelect");
var citySelect = d3.select("#citySelect");
var shapeSelect = d3.select("#shapeSelect");

// Setting default for filteredData
var filteredData = tableData;

// Setting up reference for result counter:
var userNote = d3.select("#note-area")

// Setting default values for filters
var filterDate = "";
var filterCountry = "";
var filterState = "";
var filterCity = "";
var filterShape = "";

// Setting functions for event handlers
function dateFilter() {
    if (filterDate === "") {
        dateSelect.selectAll(".value").remove();
        let dates = new Set(filteredData.map(date => date.datetime));
        dates.forEach(function(date) {
            d3.select("#dateSelect").append("option").attr("class", "value").text(date);
        })
    }
};

function countryFilter() {
    if (filterCountry === "") {
        countrySelect.selectAll(".value").remove();
        let countries = new Set(filteredData.map(country => country.country));
        countries.forEach(function(country) {
            d3.select("#countrySelect").append("option").attr("class", "value").text(country);
        })
    }
};

function stateFilter() {
    if (filterState === "") {
        stateSelect.selectAll(".value").remove();
        let states = new Set(filteredData.map(state => state.state));
        states.forEach(function(state) {
            d3.select("#stateSelect").append("option").attr("class", "value").text(state);
        })
    }
};

function cityFilter() {
    if (filterCity === "") {
        citySelect.selectAll(".value").remove();
        let cities = new Set(filteredData.map(city => city.city));
        cities.forEach(function(city) {
            d3.select("#citySelect").append("option").attr("class", "value").text(city);
        })
    }
};

function shapefilter() {
    if (filterShape === "") {
        shapeSelect.selectAll(".value").remove();
        let shapes = new Set(filteredData.map(shape => shape.shape));
        shapes.forEach(function(shape) {
            d3.select("#shapeSelect").append("option").attr("class", "value").text(shape);
        })
    }
};

//If date selected, filter all other fields
dateSelect.on("change", function() {
    filterDate = d3.event.target.value;
    console.log(filterDate);

    // Prevent the page from refreshing
    d3.event.preventDefault();

    filteredData = filteredData.filter(date => date.datetime === filterDate);

    // Remove previous note and add note with number of results found
    userNote.select("h5").remove();
    userNote.append("h5").text(`Your search currently contains ${filteredData.length} results`);

    // console.log(filteredData); - code testing purposes
    // Empty other options if event not triggered and refill data
    countryFilter();
    stateFilter();
    cityFilter();
    shapefilter();
});

//If country selected, filter all other fields
countrySelect.on("change", function() {
    filterCountry = d3.event.target.value;
    console.log(filterCountry);

    // Prevent the page from refreshing
    d3.event.preventDefault();

    filteredData = filteredData.filter(country => country.country === filterCountry);

    // Remove previous note and add note with number of results found
    userNote.select("h5").remove();
    userNote.append("h5").text(`Your search currently contains ${filteredData.length} results`);

    // console.log(filteredData); - code testing purposes
    // Empty other options if event not triggered and refill data
    dateFilter();
    stateFilter();
    cityFilter();
    shapefilter();
});

//If state selected, filter all other fields
stateSelect.on("change", function() {
    filterState = d3.event.target.value;
    console.log(filterState);

    // Prevent the page from refreshing
    d3.event.preventDefault();

    filteredData = filteredData.filter(state => state.state === filterState);

    // Remove previous note and add note with number of results found
    userNote.select("h5").remove();
    userNote.append("h5").text(`Your search currently contains ${filteredData.length} results`);

    // console.log(filteredData); - code testing purposes
    // Empty other options if event not triggered and refill data
    dateFilter();
    countryFilter();
    cityFilter();
    shapefilter();
});

//If city selected, filter all other fields
citySelect.on("change", function() {
    filterCity = d3.event.target.value;
    console.log(filterCity);

    // Prevent the page from refreshing
    d3.event.preventDefault();

    filteredData = filteredData.filter(city => city.city === filterCity);

    // Remove previous note and add note with number of results found
    userNote.select("h5").remove();
    userNote.append("h5").text(`Your search currently contains ${filteredData.length} results`);

    // console.log(filteredData); - code testing purposes
    // Empty other options if event not triggered and refill data
    dateFilter();
    countryFilter();
    stateFilter();
    shapefilter();
});

//If shape selected, filter all other fields
shapeSelect.on("change", function() {
    filterShape = d3.event.target.value;
    console.log(filterShape);

    // Prevent the page from refreshing
    d3.event.preventDefault();

    filteredData = filteredData.filter(shape => shape.shape === filterShape);

    // Remove previous note and add note with number of results found
    userNote.select("h5").remove();
    userNote.append("h5").text(`Your search currently contains ${filteredData.length} results`);

    // console.log(filteredData); - code testing purposes
    // Empty other options if event not triggered and refill data
    dateFilter();
    countryFilter();
    stateFilter();
    cityFilter();
});

// Activate Filter Button

// 1. Select Button and Form
var button = d3.select("#filter-btn");

// 2. Create Event Handler
button.on("click", filterTable);

// 3. Create the function to run event
function filterTable() {

    // Clear previous table
    tbody.selectAll('tr').remove();
    
    // Remove previous note and add note with number of results found
    userNote.select("h5").remove();
    userNote.append("h5").text(`Your search has yielded ${filteredData.length} results:`);

    // Rebuild table with filtered Data
    filteredData.forEach(function(ufoSightings) {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// Activate Reset Button

// 1. Select Button and Form
var button = d3.select("#reset-btn");

// 2. Create Event Handler
button.on("click", resetPage);

// 3. Create the function to run event
function resetPage() {
    location.reload();
}

starterPage()
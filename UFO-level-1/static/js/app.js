// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody")

// Build the table with data stored in data.js
tableData.forEach(function(ufoSightings) {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Activate Filter Button

// 1. Select Button
var button = d3.select("#filter-btn");

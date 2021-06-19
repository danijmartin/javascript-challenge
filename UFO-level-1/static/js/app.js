// from data.js
var tableData = data;

// Build the table with data stored in data.js
tableData.forEach(([datetime, city, state, country, shape, durationMinutes, comments]) => {
	var row = tbody.append("tr")
	row.append("td").text(datetime)
	row.append("td").text(city)
    row.append("td").text(state)
    row.append("td").text(country)
    row.append("td").text(shape)
    row.append("td").text(durationMinutes)
    row.append("td").text(comments)
})
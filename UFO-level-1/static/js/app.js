// from data.js
var tableData = data;

// Select the table body
var tbody = d3.select("tbody");

function buildTable(tableData) {
    // Clear table 
    tbody.html("");
    // Use the arrow function to loop through the data 
    tableData.forEach((sighting) => {
        //add to rows
        var row = tbody.append("tr");
        //Inner loop pull out keys and value
        Object.entries(sighting).forEach(([key, value]) => {
            //add cells/ table data to row
            var cell = row.append("td");
            //Use the value for the table data
            cell.text(value);
        });
    });
}


//Seperate function for the filtering
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Use d3 to select values 
    var inputElement = d3.select("#datetime").property("value");
    //Pull in the table to filter
    let filteredTable = tableData;

    //filter table to match input
    if (inputElement) {
        filteredTable = filteredTable.filter(row => row.datetime === inputElement);
    }

    //Return filter table 
    buildTable(filteredTable);

}

d3.selectAll("#filter-btn").on("click", runEnter);

//Return table 
buildTable(tableData);


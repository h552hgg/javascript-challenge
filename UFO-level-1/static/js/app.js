// from data.js
var tableData = data;

// Select the table body
var tbody = d3.select("tbody");

function buildTable(tableData){
// Use the arrow function to loop through the data 
    tbody.html("");
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

function runEnter() {

    
    // d3.event.preventDefault();
    

    const inputElement = d3.select("#datetime").property("value");
    let filteredTable = tableData;


    if (inputElement) {
        filteredTable = filteredTable.filter(row => row.datetime === inputElement);
    }


    buildTable(filteredTable);

}

d3.selectAll("#filter-btn").on("click", runEnter);

buildTable(tableData);


// from data.js
var tableData = data;
// select the table 
var tbody = d3.select("tbody");


function runEnter() {
  // clear the table first
  tbody.html("");
  //use d3 to select each filter and the input
  var dateValue = d3.select("#datetime").property("value");
  var cityValue = d3.select("#city").property("value");
  var stateValue = d3.select("#state").property("value");
  var countryValue = d3.select("#country").property("value");
  var shapeValue = d3.select("#shape").property("value");



  // Read data table first to allow the filters to apply
  let filteredData = tableData;
  if (dateValue) {
    filteredData = filteredData.filter(x => x.datetime === dateValue);
  }
  if (cityValue) {
    filteredData = filteredData.filter(x => x.city === cityValue);
  }
  if (stateValue) {
    filteredData = filteredData.filter(x => x.state === stateValue);
  }
  if (countryValue) {
    filteredData = filteredData.filter(x => x.country === countryValue);
  }
  if (shapeValue) {
    filteredData = filteredData.filter(x => x.shape === shapeValue);
  }
  console.log(filteredData)
  filteredData.forEach((sighting) => {
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

d3.selectAll("#filter-btn").on("click", runEnter);



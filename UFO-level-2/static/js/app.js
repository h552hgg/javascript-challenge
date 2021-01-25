// from data.js
var tableData = data;


var button = d3.select("#button");


var form = d3.select("#form");


button.on("click", runEnter);
form.on("submit",runEnter);


function runEnter() {
  tbody.html("");
  var inputValue = d3.select("#datetime").property("value");

  


  var filteredData = tableData.filter(x => x.datetime === inputValue);

  console.log(filteredData);

 
  var city = filteredData.map(x => x.city);
  var state = filteredData.map(x => x.state);
  var country = filteredData.map(x => x.county);
  var shape = filteredData.map(x => x.shape);

  
  var list = d3.select(".summary");


  list.html("");

  list.append("li").text(`Mean: ${city}`);
  list.append("li").text(`Median: ${state}`);
  list.append("li").text(`Mode: ${country}`);
  list.append("li").text(`Variance: ${shape}`);
  
};





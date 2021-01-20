// from data.js
var tableData = data;

// Select the table body
var tbody = d3.select("tbody");

// // // Verify reading of the data
// // console.log(tableData)

// //Loop through the data
// tableData.forEach(function(sighting){
//     // //View the return
//     // console.log(sighting)
//     //append the rows
//     var row = tbody.append("tr");
//     Object.entries(sighting).forEach(function([key,value]){
//         // //View the return
//         // console.log(key,value);

//         //add data to row
//         var cell = row.append("td");
//     });

// });


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

///Button/listner section


//Select button
var button = d3.select("#button");

//Select form
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit",runEnter);


function runEnter() {

    
    d3.event.preventDefault();
    

    var inputElement = d3.select("#datetime");
  
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    var filteredData = tableData.filter(x => x.datetime === inputValue);
  
    console.log(filteredData);


      
    // var list = d3.select(".filters");

  
    // list.html("");


    // list.append("li").text(`Mean: ${filteredData}`);
  

  
  
};

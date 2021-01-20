// from data.js
var tableData = data;

// YOUR CODE HERE!
// var Datetime = [];
// var city =[];
// var state = [];
// var country =[];
// var shape = [];
// var comment= [];
// var table_info=[];




// /// Push the values into a table bank 
// tableData.forEach((tableData) => {
//     console.log(tableData);
//     Object.entries(tableData).forEach(([value])=>{
//         table_info.push(value);

//    });
// });

// var Datetime_info= tableData.map(x => x.datetime);
// Datetime.push(Datetime_info);
// console.log(Datetime);
//var city_list = tableData.map(city => city.city);
//var state_list = tableData.map(state => state.state);


///First trial for table 
// // Select the body of the table
// var tbody = d3.select("tbody");
// //Select the table 
// var table = d3.select("table");
// //Set the class for the table/ attribute
// table.attr("class","table table-striped");
// // Iterate through each data entry
// tableData.forEach(([date,city,state,country,shape,duration,comments]) => {
//     //Set variable to add rows to the table body
//     var row = tbody.append("tr");

//     // append the rows
//     row.append("td").text(date);
//     row.append("td").text(city);
//     row.append("td").text(state);
//     row.append("td").text(country);
//     row.append("td").text(shape);
//     row.append("td").text(duration);
//     row.append("td").text(comments);


// });




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

tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
    });

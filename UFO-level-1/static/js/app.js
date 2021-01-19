// from data.js
var tableData = data;

// YOUR CODE HERE!
var Datetime = [];
var city =[];
var state = [];
var country =[];
var shape = [];
var comment= [];
var table_info=[];




/// Push the values into a table bank 
tableData.forEach((tableData) => {
    console.log(tableData);
    Object.entries(tableData).forEach(([value])=>{
        table_info.push(value);

   });
});

var Datetime_info= tableData.map(x => x.datetime);
Datetime.push(Datetime_info);
console.log(Datetime);
//var city_list = tableData.map(city => city.city);
//var state_list = tableData.map(state => state.state);


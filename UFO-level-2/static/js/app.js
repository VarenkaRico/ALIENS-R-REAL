var tableData = d3.select("tbody");
var button = d3.select('#filter-btn');

//----------------COUNTRY LIST -------------
var countries =[]
data.forEach((sight)=>{
    var country = sight.country;
    console.log(country);
    if (countries.includes(country)===false){
        countries.push(country);
    }
});

//Sorts the states in alphabetical order
var countries=countries.sort();
    //console.log(states);

var dropdown = document.getElementById("country");

//Adds each state to the dropdown list
countries.forEach((country)=>{
    var option = document.createElement("option");
    option.text=country;
    //console.log(state);
    dropdown.add(option,country);
});

// ---------------STATES LIST --------------
//Adds the states listed in the data
var states= [];

data.forEach((sight)=>{
    var state = sight.state;
    //console.log(state);
    if (states.includes(state)===false){
        states.push(state);
    }
});

//Sorts the states in alphabetical order
var states=states.sort();
    //console.log(states);

var dropdown = document.getElementById("state");

//Adds each state to the dropdown list
states.forEach((state)=>{
    var option = document.createElement("option");
    option.text=state;
    //console.log(state);
    dropdown.add(option,state);
});

// ---------------CITIES LIST --------------
//Adds the cities listed in the data
var cities= [];

data.forEach((sight)=>{
    var city = sight.city;
    //console.log(city);
    if (cities.includes(city)===false){
        cities.push(city);
    }
});

//Sorts the cities in alphabetical order
var cities=cities.sort();
    //console.log(cities);

var dropdown = document.getElementById("city");

//Adds each city to the dropdown list
cities.forEach((city)=>{
    var option = document.createElement("option");
    option.text=city;
    //console.log(city);
    dropdown.add(option,city);
});

// ---------------SHAPES LIST --------------
//Adds the shapes listed in the data
var shapes= [];

data.forEach((sight)=>{
    var shape = sight.shape;
    //console.log(shape);
    if (shapes.includes(shape)===false){
        shapes.push(shape);
    }
});

//Sorts the shapes in alphabetical order
var shapes=shapes.sort();
    //console.log(shapes);

var dropdown = document.getElementById("shape");

//Adds each shape to the dropdown list
shapes.forEach((shape)=>{
    var option = document.createElement("option");
    option.text=shape;
    //console.log(shape);
    dropdown.add(option,shape);
});

//-------------------FILTERING DATA----------------
button.on("click",function(){
   
    //Gets date requested in Form
    var sight_date=document.getElementById('datetime').value;
    var sight_state=document.getElementById('state').value;
    var sight_country=document.getElementById('country').value;
    var sight_city=document.getElementById('city').value;
    var sight_shape=document.getElementById('shape').value;
    console.log(sight_state);
    
    //Standardizes format
    var stnd_sight_date=sight_date.indexOf("0")===0 ? sight_date.replace("0","") : sight_date;
    var stnd_sight_date=stnd_sight_date.replace("/0","/");
    
    //Filters the data that matches the sight_date

    if (stnd_sight_date ===""){
        var filteredData2=data;
        console.log("date empty");
    }else{
        var filteredData2 = data.filter(data=>data.datetime === stnd_sight_date);
        console.log("sight date "+stnd_sight_date);
    }

    //Filters the country that matches the sight_country
    if (sight_country ===""){
        var filterData2=filterData2;
        console.log("country empty");
    }else{
        var filteredData2 = filteredData2.filter(filteredData2=>filteredData2.country === sight_country);
        console.log("sight country "+sight_country);
    }

    //Filters the state that matches the sight_state
    if (sight_state ===""){
        var filterData2=filterData2;
        console.log("state empty");
    }else{
        var filteredData2 = filteredData2.filter(filteredData2=>filteredData2.state === sight_state);
        console.log("sight state "+sight_state);
    }

    if (sight_city ===""){
        var filterData2=filterData2;
        console.log("city empty");
    }else{
        var filteredData2 = filteredData2.filter(filteredData2=>filteredData2.city === sight_city);
        console.log("sight city "+sight_city);
    }

    if (sight_shape ===""){
        var filterData2=filterData2;
        console.log("shape empty");
    }else{
        var filteredData2 = filteredData2.filter(filteredData2=>filteredData2.shape === sight_shape);
        console.log("sight shape "+sight_shape);
    }
    
    var rows=document.getElementById("ufo-table").getElementsByTagName("tr").length-1
    //console.log(stnd_sight_date)

//Deletes rows of previous search
    if (rows>0){
        for (i=0;i<rows;i++){
            document.getElementById("ufo-table").deleteRow(1);
            console.log("Rows deleted" + i)
        }
    }

//Creates table with filtered data
    filteredData2.forEach((sights)=>{ 
        var row=tableData.append("tr"); //Adds rows for each set of data
        Object.entries(sights).forEach(([key,value])=>{
            var cell=row.append("td"); //Adds columns for each Key
            cell.text(value); //Adds values in each cell
        });
    });

});

var tableData = d3.select("tbody");
var button = d3.select('#filter-btn');
//var inputField=d3.select('#datetime')


button.on("click",function(){
   
    //Gets date requested in Form
    var sight_date=document.getElementById('datetime').value; 
    
    //Standardizes format
    var stnd_sight_date=sight_date.indexOf("0")===0 ? sight_date.replace("0","") : sight_date;
    var stnd_sight_date=stnd_sight_date.replace("/0","/");
    
    //Filters the data that matches the sight_date
    var filteredData2 = data.filter(date=>date.datetime === stnd_sight_date); 
    var rows=document.getElementById("ufo-table").getElementsByTagName("tr").length-1
    //console.log(stnd_sight_date)

//Deletes rows of previous search
    if (rows>1){
        for (i=0;i<rows;i++){
            document.getElementById("ufo-table").deleteRow(1);
            console.log("Rows deleted" + i)
        }
    }


//Create table with filtered data
    filteredData2.forEach((sights)=>{ 
        var row=tableData.append("tr"); //Adds rows for each set of data
        Object.entries(sights).forEach(([key,value])=>{
            var cell=row.append("td"); //Adds columns for each Key
            cell.text(value); //Adds values in each cell
        });
    });

});

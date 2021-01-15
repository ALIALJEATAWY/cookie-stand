'use strict';



/////////////////global////////////////
  var hours =['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'];
  var alllocations= [];
  function randomnumbercus (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  }
  var places = [];
  var alltotal=0;
  var divo;
  var locationtable;
  var totalofcolumn;
  dotable();
  creatHeader();
  totalofcolumn = [];
  for(var i = 0; i < hours.length; i++){
   totalofcolumn.push(0);
}


//////////////////////////////////////




////////// constructor////////////////
function SalmonCookies(locationcookies, mincustperhour, maxcustperhour, avgcookiespurchased){
 this.locationcookies = locationcookies;
 this.mincustperhour = mincustperhour;
 this.maxcustperhour = maxcustperhour;
 this.avgcookiespurchased = avgcookiespurchased;
 this.customersperhour = [];
 this.cookiesperhour = [];
 this.totalcookies = 0;
 places.push(this);
}
//////////////////////////////////////




 
/////////////////// prototype function //////////////////////

SalmonCookies.prototype.calccustomersperhour = function () {
   for (var cust = 0; cust < hours.length; cust++) {
      this.customersperhour.push(randomnumbercus(this.mincustperhour, this.maxcustperhour));
   }
 }; 

 SalmonCookies.prototype.calccookiesperhour = function(){
   for (var cook =0; cook < this.customersperhour.length; cook++) {
      var cookiesperhour = Math.ceil(this.customersperhour[cook]*this.avgcookiespurchased);
      this.cookiesperhour.push(cookiesperhour);
      this.totalcookies = this.totalcookies + cookiesperhour;
      totalofcolumn[cook] = totalofcolumn[cook] + this.cookiesperhour[cook];
      console.log(totalofcolumn[cook]);
      alltotal = alltotal + this.cookiesperhour[cook];
      // console.log(cookiesperhour);
   }
   
};

/////////////////////////////////////////




function dotable(){
   divo = document.getElementById('locations');
   locationtable = document.createElement('table');
   divo.appendChild(locationtable);
}

function creatHeader(){
   var HeaderRow = document.createElement('tr');
   locationtable.appendChild(HeaderRow);

   var emptyCell = document.createElement('th');
   HeaderRow.append(emptyCell);

   var hourCell;
   for(var i = 0; i < hours.length; i++){
      hourCell = document.createElement('th');
      hourCell.textContent = hours[i];
      HeaderRow.appendChild(hourCell);
      // totalofcolumn[i] = totalofcolumn[i] + this.cookiesperhour[i];
   }
   
 var totalCell = document.createElement('th');
 totalCell.textContent = 'daily location total';
 HeaderRow.appendChild(totalCell);
}

function createTotalRow(){ 
var totalRow = document.createElement('tr');
locationtable.appendChild(totalRow);

var totalCell = document.createElement('th');
totalCell.textContent = 'totals';
totalRow.appendChild(totalCell);

var columntotalcell;
for(var a = 0; a< hours.length; a++){
   columntotalcell = document.createElement('th');
   columntotalcell.textContent = totalofcolumn[a];
   console.log(totalofcolumn);
   totalRow.appendChild(columntotalcell);
}
var alltotalcell = document.createElement('th');
alltotalcell.textContent = alltotal;
totalRow.appendChild(alltotalcell);


}



//////////////////////// prototype ///////////////////////

SalmonCookies.prototype.render = function(){
  var locationData = document.createElement('tr');
 locationtable.appendChild(locationData);

 var nameCell = document.createElement('td');
 nameCell.textContent= this.locationcookies;
 locationData.appendChild(nameCell);

 var datacell;
 for(var i = 0; i <this.cookiesperhour.length; i++){
   datacell = document.createElement('td');
   datacell.textContent = this.cookiesperhour[i];
   locationData.appendChild(datacell);
 }
var totalCell = document.createElement('td');
totalCell.textContent = this.totalcookies;
locationData.appendChild(totalCell);
};



//////////////////////////////////////




///////////////// locations ///////////////////
 var seattle = new SalmonCookies ('Seattle', 23, 65, 6.3);
 var tokyo = new SalmonCookies ('Tokyo', 3, 24, 1.2);
 var dubai = new SalmonCookies ('Dubai', 11, 38, 3.7);
 var paris = new SalmonCookies ('Paris', 20, 38, 2.3);
 var lima = new SalmonCookies ('Lima', 2, 16, 4.6);
 for (var a = 0; a < places.length; a++ ){
    places[a].calccustomersperhour();
    places[a].calccookiesperhour();
    places[a].render();
    

 }

 createTotalRow();
 
/////////////////////////////////////////////
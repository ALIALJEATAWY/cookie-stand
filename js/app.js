'use strict';

/////////////////////////////////
 var hours =['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'];
 
 function randomnumbercus (min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
  }

//////////// Seattle ///////////////////////////////////////////

var seattle = {
 name: 'seattle',
 mincustperhour : 23,
 maxcustperhour : 65,
 avgcookiespurchased : 6.3,
 customersperhour: [],
 cookiesperhour: [],
 totalcookies: 0,
 
  calccustomersperhour: function () {
        
     for (var cust = 0; cust <hours.length; cust++) {
          this.customersperhour.push(randomnumbercus(this.mincustperhour, this.maxcustperhour));
    
    } 
      
    },
    
    
    calccookiesperhour: function(){
     for (var cook =0; cook < this.customersperhour.length; cook++) {
        var cookiesperhour = Math.ceil(this.customersperhour[cook]*this.avgcookiespurchased);
        this.cookiesperhour.push(cookiesperhour);
        this.totalcookies = this.totalcookies + cookiesperhour;
    
     }

    },
 


 render : function(){
   var divo = document.getElementById('locations');
   var locationSection = document.createElement('section');

 divo.appendChild(locationSection);

 var locationName = document.createElement('h3');
 locationName.textContent = this.name;
 locationSection.appendChild(locationName);

 var locationList = document.createElement('ul');
 locationSection.appendChild(locationList);

 var listItem;
 for(var i = 0; i < this.cookiesperhour.length; i++){
listItem = document.createElement('li');
   listItem.textContent = hours[i] + ': ' + this.cookiesperhour[i] + ' cookies';
locationList.appendChild(listItem);


 }


 listItem.textContent = 'The total is:' + this.totalcookies;
 locationList;

 }

};


seattle.calccustomersperhour();
seattle.calccookiesperhour();
seattle.render();
console.log(seattle);



//////////// Tokyo  ///////////////////////////////////////////
var tokyo = {
  name: 'tokyo',
  mincustperhour : 3,
  maxcustperhour : 24,
  avgcookiespurchased : 1.2,
  customersperhour: [],
  cookiesperhour: [],
  totalcookies: 0,
  

calccustomersperhour: function () {
        
   for (var cust = 0; cust <hours.length; cust++) {
        this.customersperhour.push(randomnumbercus(this.mincustperhour, this.maxcustperhour));
  
  } 
    
  },
  
  
  calccookiesperhour: function(){
   for (var cook =0; cook < this.customersperhour.length; cook++) {
      var cookiesperhour = Math.ceil(this.customersperhour[cook]*this.avgcookiespurchased);
      this.cookiesperhour.push(cookiesperhour);
      this.totalcookies = this.totalcookies + cookiesperhour;
  
   }

  },



render : function(){
 var div1 = document.getElementById('locations');
 var locationSection = document.createElement('section');

div1.appendChild(locationSection);

var locationName = document.createElement('h3');
locationName.textContent = this.name;
locationSection.appendChild(locationName);

var locationList = document.createElement('ul');
locationSection.appendChild(locationList);

var listItem;
for(var i = 0; i < this.cookiesperhour.length; i++){
listItem = document.createElement('li');
 listItem.textContent = hours[i] + ': ' + this.cookiesperhour[i] + ' cookies';
locationList.appendChild(listItem);


}


listItem.textContent = 'The total is:' + this.totalcookies;
locationList;

}

};


tokyo.calccustomersperhour();
tokyo.calccookiesperhour();
tokyo.render();
console.log(tokyo);


  
//  /////////// Dubai  ///////////////////////////////////////////

var dubai = {
  name: 'dubai',
  mincustperhour : 11,
  maxcustperhour : 38,
  avgcookiespurchased : 3.7,
  customersperhour: [],
  cookiesperhour: [],
  totalcookies: 0,
  
  
 
  calccustomersperhour: function () {
        
   for (var cust = 0; cust <hours.length; cust++) {
        this.customersperhour.push(randomnumbercus(this.mincustperhour, this.maxcustperhour));
  
  } 
    
  },
  
  
  calccookiesperhour: function(){
   for (var cook =0; cook < this.customersperhour.length; cook++) {
      var cookiesperhour = Math.ceil(this.customersperhour[cook]*this.avgcookiespurchased);
      this.cookiesperhour.push(cookiesperhour);
      this.totalcookies = this.totalcookies + cookiesperhour;
  
   }

  },



render : function(){
 var div1 = document.getElementById('locations');
 var locationSection = document.createElement('section');

div1.appendChild(locationSection);

var locationName = document.createElement('h3');
locationName.textContent = this.name;
locationSection.appendChild(locationName);

var locationList = document.createElement('ul');
locationSection.appendChild(locationList);

var listItem;
for(var i = 0; i < this.cookiesperhour.length; i++){
listItem = document.createElement('li');
 listItem.textContent = hours[i] + ': ' + this.cookiesperhour[i] + ' cookies';
locationList.appendChild(listItem);


}


listItem.textContent = 'The total is:' + this.totalcookies;
locationList;

}

};


dubai.calccustomersperhour();
dubai.calccookiesperhour();
dubai.render();
console.log(dubai);
  


///////////// Paris ///////////////////////////////////////////
var paris = {
   name: 'paris',
   mincustperhour :20,
   maxcustperhour : 38,
   avgcookiespurchased : 2.3,
   customersperhour: [],
   cookiesperhour: [],
   totalcookies: 0,
   
   calccustomersperhour: function () {
        
      for (var cust = 0; cust <hours.length; cust++) {
           this.customersperhour.push(randomnumbercus(this.mincustperhour, this.maxcustperhour));
     
     } 
       
     },
     
     
     calccookiesperhour: function(){
      for (var cook =0; cook < this.customersperhour.length; cook++) {
         var cookiesperhour = Math.ceil(this.customersperhour[cook]*this.avgcookiespurchased);
         this.cookiesperhour.push(cookiesperhour);
         this.totalcookies = this.totalcookies + cookiesperhour;
     
      }
   
     },
   
   
   
   render : function(){
    var div1 = document.getElementById('locations');
    var locationSection = document.createElement('section');
   
   div1.appendChild(locationSection);
   
   var locationName = document.createElement('h3');
   locationName.textContent = this.name;
   locationSection.appendChild(locationName);
   
   var locationList = document.createElement('ul');
   locationSection.appendChild(locationList);
   
   var listItem;
   for(var i = 0; i < this.cookiesperhour.length; i++){
   listItem = document.createElement('li');
    listItem.textContent = hours[i] + ': ' + this.cookiesperhour[i] + ' cookies';
   locationList.appendChild(listItem);
   
   
   }
   
   
   listItem.textContent = 'The total is:' + this.totalcookies;
   locationList;
   
   }
   
   };
   
   
   paris.calccustomersperhour();
   paris.calccookiesperhour();
   paris.render();
   console.log(paris);
  
  

// /////////// Lima  ///////////////////////////////////////////
var lima = {
  name: 'lima',
  mincustperhour : 2,
  maxcustperhour : 16,
  avgcookiespurchased : 4.6,
  customersperhour: [],
  cookiesperhour: [],
  totalcookies: 0,
  
  calccustomersperhour: function () {
        
   for (var cust = 0; cust <hours.length; cust++) {
        this.customersperhour.push(randomnumbercus(this.mincustperhour, this.maxcustperhour));
  
  } 
    
  },
  
  
  calccookiesperhour: function(){
   for (var cook =0; cook < this.customersperhour.length; cook++) {
      var cookiesperhour = Math.ceil(this.customersperhour[cook]*this.avgcookiespurchased);
      this.cookiesperhour.push(cookiesperhour);
      this.totalcookies = this.totalcookies + cookiesperhour;
  
   }

  },



render : function(){
 var div1 = document.getElementById('locations');
 var locationSection = document.createElement('section');

div1.appendChild(locationSection);

var locationName = document.createElement('h3');
locationName.textContent = this.name;
locationSection.appendChild(locationName);

var locationList = document.createElement('ul');
locationSection.appendChild(locationList);

var listItem;
for(var i = 0; i < this.cookiesperhour.length; i++){
listItem = document.createElement('li');
 listItem.textContent = hours[i] + ': ' + this.cookiesperhour[i] + ' cookies';
locationList.appendChild(listItem);


}


listItem.textContent = 'The total is:' + this.totalcookies;
locationList;

}

};


lima.calccustomersperhour();
lima.calccookiesperhour();
lima.render();
console.log(lima);
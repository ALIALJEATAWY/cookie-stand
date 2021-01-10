'use strict';

/////////////////////////////////
 var hours =['6','7','8','9','10','11','12','13','14','15','16','17','18','19'];
 
 var randomnumbercus = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
 };

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
        console.log(this.calccustomersperhour[cust]);
    
    } 
    
       return this.customersperhour;  
       
    },
    
    calccookiesperhour: function(){
     for (var cook =0; cook < hours.length; cook++) {
        this.cookiesperhour.push(Math.floor(this.customersperhour[cook] * this.avgcookiespurchased));
        this.totalcookies = this.totalcookies + this.cookiesperhour[cook];
     
      for (var d=0; d< hours; d++) {
          console.log(hours [d],':', this.cookiesperhour[d],'+cookies+');
      }

    };
 console.log(this.totalcookies);
 return this.cookiesperhour,this.totalcookies;
},

};

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
         console.log(this.calccustomersperhour[cust]);
     
     } 
     
        return this.customersperhour;  
        
     },
     
     calccookiesperhour: function(){
      for (var cook =0; cook < hours.length; cook++) {
         this.cookiesperhour.push(Math.floor(this.customersperhour[cook] * this.avgcookiespurchased));
         this.totalcookies = this.totalcookies + this.cookiesperhour[cook];
      
       for (var d=0; d< hours; d++) {
           console.log(hours [d],':', this.cookiesperhour[d],'+cookies+');
       }
 
     };
  console.log(this.totalcookies);
  return this.cookiesperhour,this.totalcookies;
 },
 
 };

  
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
         console.log(this.calccustomersperhour[cust]);
     
     } 
     
        return this.customersperhour;  
        
     },
     
     calccookiesperhour: function(){
      for (var cook =0; cook < hours.length; cook++) {
         this.cookiesperhour.push(Math.floor(this.customersperhour[cook] * this.avgcookiespurchased));
         this.totalcookies = this.totalcookies + this.cookiesperhour[cook];
      
       for (var d=0; d< hours; d++) {
           console.log(hours [d],':', this.cookiesperhour[d],'+cookies+');
       }
 
     };
  console.log(this.totalcookies);
  return this.cookiesperhour,this.totalcookies;
 },
 
 };
//  /////////// Paris ///////////////////////////////////////////

var paris = {
  name: 'paris',
  mincustperhour : 20,
  maxcustperhour : 38,
  avgcookiespurchased : 2.3,
  customersperhour: [],
  cookiesperhour: [],
  totalcookies: 0,
  
   calccustomersperhour: function () {
         
      for (var cust = 0; cust <hours.length; cust++) {
           this.customersperhour.push(randomnumbercus(this.mincustperhour, this.maxcustperhour));
         console.log(this.calccustomersperhour[cust]);
     
     } 
     
        return this.customersperhour;  
        
     },
     
     calccookiesperhour: function(){
      for (var cook =0; cook < hours.length; cook++) {
         this.cookiesperhour.push(Math.floor(this.customersperhour[cook] * this.avgcookiespurchased));
         this.totalcookies = this.totalcookies + this.cookiesperhour[cook];
      
       for (var d=0; d< hours; d++) {
           console.log(hours [d],':', this.cookiesperhour[d],'+cookies+');
       }
 
     };
  console.log(this.totalcookies);
  return this.cookiesperhour,this.totalcookies;
 },
 
 };

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
         console.log(this.calccustomersperhour[cust]);
     
     } 
     
        return this.customersperhour;  
        
     },
     
     calccookiesperhour: function(){
      for (var cook =0; cook < hours.length; cook++) {
         this.cookiesperhour.push(Math.floor(this.customersperhour[cook] * this.avgcookiespurchased));
         this.totalcookies = this.totalcookies + this.cookiesperhour[cook];
      
       for (var d=0; d< hours; d++) {
           console.log(hours [d],':', this.cookiesperhour[d],'+cookies+');
       }
 
     };
  console.log(this.totalcookies);
  return this.cookiesperhour,this.totalcookies;
 },
 
 };
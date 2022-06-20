var url = require('url')
var adr =  "https://www.flipkart.com/search?q=laptop&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off";

// .pare method convert given adress into object with key value pair 
var a = url.parse(adr,true);

console.log(a);
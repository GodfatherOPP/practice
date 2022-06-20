// var fs = require("fs");
// console.error('Whoops, something bad happened');
// console.log("process completed");
function getIndexToIns(arr, num) {
    var tempArr=arr;
    tempArr.unshift(num);
    console.log(arr,tempArr.indexOf(num));
  
    for(let i=0;i<tempArr.length-1;i++){
      var temp=tempArr[i+1];
      if(tempArr[i]>tempArr[i+1]){
    console.log(tempArr[i],tempArr[i+1],i);
        tempArr[i+1]=tempArr[i];
       tempArr[i]=temp;
      }
    }
  
    console.log(arr,tempArr.indexOf(num));
    return tempArr.indexOf(num);
  }
  
  getIndexToIns([2, 20, 10], 19);
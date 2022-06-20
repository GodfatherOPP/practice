var fs = require('fs');
var data = " append method crete file if it does not exist and then write to file "
var data2 = " \n append method take three arguments (filename , data to write , callback function )"

//fs.appendFile is used to update file 

// fs.appendFile('fileUsingAppendMethod.txt',data ,function(err){
//     if(err) throw err;
//     console.log("success");
// })


//fs.open is used to open file in various forms

// fs.open('fileUsingopenMethod.txt','r',function(err,f){
    
//     if(err) throw err;

//     console.log(f);
//     console.log("success");
// })

// fs.unlink method is used to delete file 

// fs.unlink("temp.txt", function(err) {
//     if(err) throw err;

//     console.log("file deleted");
// })

// fs.rename to rename file 
// fs.rename('temp.txt','renamed.txt',function (err) {
//     if (err) throw err;
//     console.log("success");
// })
console.log("end ");
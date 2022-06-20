const fs = require("fs");
// const student = {
//   name: "naitk",
//   age: 12,
//   school: "teoler",
//   hobby: "cricket",
// };

//Process to write data steps=>1. convert data to jason string   2.wrte that stringified data to file

//JSON.stringify() converts javascript data to json string
// const stringifiedData = JSON.stringify(student);
// console.log(stringifiedData);
// fs.writeFile("1-json.json", stringifiedData, function (err) {
//   if (err) throw err;
//   console.log("success");
// });

//Process to read file
// steps=> 1.get file content from json file wher data is stored into
// a variable (this data is in buffer form)
//convert this data to a string and then parse this string to get back an object
// const bufferedData = fs.readFileSync("1-json.json");
// const stringifiedBufferData = bufferedData.toString();
// const data = JSON.parse(stringifiedBufferData);

// console.log(data.name, data.age);
// challenge
// change property of student written in json file , load and overrite the json file content
const bufferedStudentData = fs.readFileSync("1-json.json");
const studentDataString = bufferedStudentData.toString();
var student = JSON.parse(studentDataString);
student.name = "Harsh Rathore";
student.age = 20;
student.school = "sn convent";
student.hobby = "Video Gaming";
console.log(student);

const studentData = JSON.stringify(student);
fs.writeFileSync("1-json.json", studentData);
// 1-json.json content before running programe
// { "name": "naitk", "age": 12, "school": "teoler", "hobby": "cricket" }
// after running programe
// {"name":"Harsh Rathore","age":20,"school":"sn convent","hobby":"Video Gaming"}

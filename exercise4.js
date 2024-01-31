//1. boolean
var flag = true;
console.log("Value assigned to flag is: " + flag);
//2. number
var x = 5;
console.log("Value assigned to x is: " + x);
//3. String
var myName = "Tiffany";
console.log("My name is " + myName);
//4. Array
var myArray = [1, 2, 3];
//for(let i=0;i<myArray.length;i++){
//    console.log("The value in myArray is " + myArray[i]);
//}
myArray.forEach(function (item) {
    console.log(item);
});
//5. Any
var myUnknown = "anything we want";
console.log("My any value is " + myUnknown);

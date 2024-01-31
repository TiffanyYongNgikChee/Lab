//1. boolean
let flag: boolean = true;
console.log("Value assigned to flag is: " + flag);

//2. number
let x: number = 5;
console.log("Value assigned to x is: " + x);

//3. String
let myName: string = "Tiffany";
console.log("My name is " + myName);

//4. Array
let myArray: number[] = [1,2,3];
//for(let i=0;i<myArray.length;i++){
//    console.log("The value in myArray is " + myArray[i]);
//}

myArray.forEach((item) => {
    console.log(item);
})

//5. Any
let myUnknown: any = "anything we want";
console.log("My any value is " + myUnknown);
//Ex 5(a)
function count_with_spaces(value:string){
    let count = value.length; //assign the number of char in string
    return  count; 
}
console.log(count_with_spaces("test 1")); //returned 6

//Ex 5(b)
function count_without_spaces(value:string){
    let count = value.replace(" ","").length; //excluding spaces at the beginning and the end
    return count;
}
console.log(count_without_spaces("test 1"));

//Ex 5(c)
function count(value:string, spaces?:boolean){
    let count:number = 0;
    if(spaces){
        count = value.length;
    }else{
        count = value.replace(" ","").length;  
    }
    return count;
}
console.log(count("test 1"),true);
console.log(count("test 1",false));
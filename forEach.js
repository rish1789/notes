let arr=[23,73,78,94,18];
arr.forEach(element =>{
    console.log(element);
});
arr.forEach(function(e){
    console.log(e);
});
arr.forEach((element,index)=>{
    console.log(`array index is${index} and Elements are ${element}`);
});
arr.map((element)=>{
    console.log(element);
});
let mapreturn=arr.map((element,index)=>{
    return `array index is ${index} and element are ${element} `;
});
console.log(mapreturn);
arr.forEach((element,index,array)=>{
    console.log(`array index is${index} and Elements are ${element}`);
    console.log(array);
});
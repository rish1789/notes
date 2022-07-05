// function to print the number 
function printnumber(n){   //Start
    if(n<0){
        return 0;
    }
    else{
        console.log(n);
    }
    printnumber(n-1);
}
printnumber(10);//end
//function to print table 
function print_table(n,i){ // start
    if(n===0){
        return 0;
    }
    else{
        console.log(`${i}*${n}=${n*i}`);
    }
    print_table(n-1,i);
}
print_table(10,2);//end 
// sum of number
 function sum(n){
    if(n===0){
        return 0;
    }
    let prev=sum(n-1);
    return n+prev;
 } 
 console.log(sum(10));
 // factorial
 function fact(n){
    if (n===0){
        return 1;
    }
    let prevfact=fact(n-1);
    return n*prevfact;
 }
 console.log(fact(5));
// power 
function powr(n,i){
    if(i===0){
        return 1;
    }
    let prepow=powr(n,i-1);
    return n*prepow;
}
console.log(powr(5,3));
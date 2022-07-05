/*
let age=15;
if(age>18){
    console.log(true);
}
else
{
    console.log(false);
}
*/

/*
const n1=3,n2=2,n3=10;
if(n2>n1&&n2<n3)
{
    console.log("increasing order");
}
else if(n1>n2&&n2>n3)
{
    console.log("decreasing order");
}
else
{
    console.log("neither increasing nor decreasing");
}
*/
/*const n1=23,n2=13,n3=45;
if(n1>n2&&n1>n3)
{
    console.log(n1,"is greater");
}
else if(n2>n1&&n2>n3)
{
    console.log(n2,"is greater");
}
else{
    console.log(n3,"is greater");
}*/
/*const grade=32;
if(grade>=90){
    console.log("A")
}
else if(grade>=80&&grade<=89)
{
    console.log("B");
}
else if(grade>=60&&grade<=79)
{
    console.log("C");
}
else if(grade>=33&&grade<=59){
    console.log("D");
}
else
{
    console.log("F");
}
const m=7;
const a=5;
let req=Math.ceil(0.75*m);
if(a>=req){
    console.log(0);
}
else{
    console.log(req-a);
}*/
const a=1,b=5,c=1;
let d=Math.sqrt((b*b)-(4*a*c));
if(d==0){
    console.log((-b)/(2*a));
}
else if(d>0){
    console.log((((-b)+d)/(2*a)),(((-b)-d)/(2*a)));
}
else{
    console.log("no real root");
}
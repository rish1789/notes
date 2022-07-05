//BREAK
/*let i=0;
while(i<=5){
    if(i==3)
    {
        break;
    }
    console.log(i);
    i++;
}
console.log("exit from loop");*/
//continue
for(let i=0;i<=5;i++)
{
    if(i==3)
    {
        continue;
    }
    console.log(i);
}
console.log("exist from loop");
//while
let j=0;
while(j<=5)
{
   if(j==3)
   {
    j++;
    continue;
   }
   console.log(j);
   j++;
   
}
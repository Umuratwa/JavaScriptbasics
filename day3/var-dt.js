

let citizens = {
    "men" : 10,
    "women" : 5,
   }
   console.log(citizens.women)
   
   
   const arr =[[1,2], [3,4] ,[5,6] ,7 ,8];
   console.log(arr[4]);
   const array =[["a,b"] , ["c","d"] , ["e,f"] ,["g,h"]];
   console.log(array[0]);
   console.log(array[1][1]);
   
   const person = {fname:"John", lname:"Doe", age:25}; 
   
   let y = "";
   for (let x in person) {
     y= y + person[x];
   }
   console.log(y);

const z = { fName:"umuratwa" , lname:"rebecca" , country:"rwanda"};
let x="My names and country is:";
for(let c in z){
x = x + z[c];
}
console.log(x);


const n={fname:"becca" ,lname:"beccah" ,age:30};
let a="my names and age is:";
for(let v in n){
    a = a + n[v];
}
console.log(a);

let citizen={
    men:4,
    women:2,
    child:7
}
console.log(citizen.child);

const num = -4;
console.log(Math.abs(num));

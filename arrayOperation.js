let myHouseself =["powder","scent","facewash","serum"];

//access

console.log(myHouseself[2]);

//insert

let insert=myHouseself.splice(2,0,"moister");
console.log(myHouseself);

//delete

console.log(myHouseself.pop());

console.log(myHouseself);


let index=myHouseself.includes("powder");
console.log(index);

if (index===true) {
    console.log("i found the book");
    
    
} else {
    console.log("not found");
    
}



 

function na(arr) {
    
  console.log(arr.push("how"));
  console.log(arr);
  
   
  
    
}

na(["hi","bye"]);

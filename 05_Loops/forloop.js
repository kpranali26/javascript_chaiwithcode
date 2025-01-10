
let array =[1,2,3,4,5]

// Normal for-loop
for (let mynewIndex = 0; mynewIndex < array.length; mynewIndex++) {
    const element = array[mynewIndex];
    // console.log(element);
}

//Nested for-loop

for (let index = 0; index < array.length; index++) {
    const element = array[index];
        for (let j = 0; j < array.length; j++) {
            const num = array[j];
            // console.log( index + " * " + j + " = "+ index * j );
            
        }
}


// for loop with break and continue

for (let i = 0; i < array.length; i++) {
   if(i==2){
     console.log("2 is the best");
    break;
    
   }
   else{
    console.log("skip term..");
    
    continue;
   }
    
}

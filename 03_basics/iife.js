//  IIFE - Immediately Invoked Function Expression

//  Syntax -()()

(function chai() {
    console.log("DB connected");
    
    
}) () ; // if we dont put semicolon here then it will throw an error because we have to stop execution of first
//two consequent iife can cause an error without a semicolon

// immediate execution happens without calling it
(() => {
    console.log("DB connected 2");
    
})();

((surname) => {
    console.log(`DB connected 2 ${surname}`);
    
})("kathar")
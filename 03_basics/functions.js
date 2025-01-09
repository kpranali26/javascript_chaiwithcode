// function loginUser (userName) {
//     if (userName === undefined) {
//         console.log("Please enter a username:");
//         return    
//     }
//     return console.log(`${userName} just Logged in` ) 
// };
    
// loginUser("Pranali")
//++++++++++++++++++++++++++++++++++++ part 2++++++++++++++++++++++++++++++++++++++++++++++
// const myNewArray = [100,200,400,300]
// function returnSecondVal(getArray) {
//     return console.log(getArray[1]);
 
// }


// returnSecondVal(myNewArray)

// Nested functions :

function one() {
    const userName ="hitesh"
    function two() {
        const website ="youtube"
        console.log(userName);
        
    }
    // console.log(website); // here executions stops because inner variables cannot accessed by outer area
    two()
    console.log(userName);
    
    
}
one()
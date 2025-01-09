// const chai = () => {
//     let userName = "hitesh choudhary"
//     // console.log(this.userName); // Main difference on normal and arrow function 
//     // "this" keyword is not work here , it is only work in objects
    
// }
// chai()


 //1] const addNum = (num1,num2) => {
//     return num1+num2
// }
// 2] const addNum = (num1,num2) => num1+num2

//3]

// const addNum = (num1,num2) => (num1+num2)
 const addNum=(num1,num2) => ({userName :"hitesh"}); // without a () braces it is not working which works asme as iife
console.log(addNum(3,4))
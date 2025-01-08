const arr1 = [1,2,3,4,"pranali","a",];
const arr0 = [[45,67,["p","h"]],9,8,7]
const arr2 = new Array(6,7,8,9,10);
// console.log(arr1);
// console.log(arr2);
// // console.log(arr1.push(arr2));
// console.log(arr1);
// console.log(arr1.pop(arr2));
// console.log(arr1);
// console.log(arr1.unshift(2));
// console.log(arr1);
// console.log(arr1.shift());
// console.log(arr1);
// console.log(arr1.includes(45));
// console.log(arr1);
// console.log(arr1.indexOf(2));
// console.log(arr1);


//  here slice and splice are most important part according to  the javascript interview:
    // console.log(arr1.slice(1,4));
    // console.log(arr1);
    // console.log(arr1.splice(1,4));
    // console.log(arr1);


// Spread operator : again learn it is not working correctly
// const new_arr = [...arr1 , ...arr0];
// console.log(new_arr);
const res = arr0.flat(Infinity);
console.log(res);
console.log(Array.isArray("pranali"));
console.log(Array.from("pranali"));
console.log(Array.from({name: "pranali"}))


let s1 = 100 ;
let s2 = 200;
let s3 = 300;
console.log("new array", Array.of(s1,s2,s3));










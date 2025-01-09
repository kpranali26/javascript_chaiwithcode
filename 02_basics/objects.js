const new_obj = {
    name : "pranali",
    age : 19,
    loc : "jaipur",
    email : "abc@gmail.com"
}
// console.log(new_obj["loc"]);


// revise more concept about Symbol type of in objects
const mySym = Symbol("key1")
// console.log(typeof mySym);

const objSym = {
    [mySym] :"myKey1",

    
    
}

console.log(typeof objSym.mySym)

Object.freeze(new_obj)
console.log(new_obj);

// +++++++++++++++++++++++++++++++++++++ advanced part of objects +++++++++++++++++++++++++++++++++

// Nested objects are also aalowed
const school = {
    name : "abc",
    stdNum : 123,
    student : {
        std_name :"abd",
        std_roll : 45,
        std_class : 5
    },
    address : "aakashwani"

}

console.log(school.student.std_roll);



// console.log(Object.keys(new_obj));


console.log(new_obj.hasOwnPeoperty('name'));




const coding = ["js","ruby","java","python","cpp"]


// "forEach" on array
// coding.forEach(function (val) {
//     console.log(val);   
// })


// "forEach" using arrow function

let objArr = [
    {
        name: 'john',
        age: 12,
        gender: 'male'
    },
    {
        name: 'jane',
        age: 15,
        gender: 'female'
    },
    {
        name: 'julie',
        age: 20,
        gender: 'trans'
    }
];


objArr.forEach((value)=> console.log(value.name)
)
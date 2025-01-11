const myNums = [1,2,3,4,5,6,7,8,9]

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

const newNums = objArr.filter((item)=> item.name ==="jane"
    
)

// console.log(newNums);


//  map on array
const num = myNums.map((n1)=> n1+1) 

console.log(num);

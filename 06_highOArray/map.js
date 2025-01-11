const myMap = new Map()
myMap.set('IN' ,"india")
myMap.set('USA',"united states of america","New York")
myMap.set('FR',"france")

// console.log(myMap);

for (const [key,value] of myMap) {
 console.log(key,':-',value);
     
}

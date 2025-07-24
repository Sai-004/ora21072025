var txt = "";

// function myFunction(value, index, array){
//     txt = txt + value + "-->";
//     console.log(value, '|', index, '|', array);
// }


var numbers = [10, 20, 30, 40, 50];
// numbers.forEach(myFunction);
// console.log(txt);




var numbers1 = [45,4,9,16,25];

// var numbers2 = [];
// for(item of numbers1){
//     numbers2.push(item ** 2);
// };
// console.log(numbers2);

var numbers3 = numbers1.map((x) => (x**2));
console.log(numbers3);

var numbersOver18 = numbers1.filter((v, i, a) => (v > 18));
console.log(numbersOver18);

var numbersReduce = numbers1.reduce((prev, curr, currInd, array) => (prev + curr));
console.log(numbersReduce);

var someOver18 = numbers.some((v, i, a) => (v > 18));
console.log(someOver18);

var allOver18 = numbers.every((v, i, a) => (v > 18));
console.log(allOver18);

var first = numbers.find((v, i, a) => (v > 18));
console.log(first);

var first = numbers.findIndex((v, i, a) => (v > 18));
console.log(first);


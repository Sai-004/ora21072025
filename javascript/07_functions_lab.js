function getindeces(mainstr, substr){

    var indeces = [];

    return indeces;
}

function capitalize(mainstr){

}

function maketitle(mainstr){
    return mainstr
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function formatstr(mainstr){

}

/*

mainstr = "mississippi"
substr  = "ss"

[[2,4], [5,7]]

other possibilities:
[] -> when the substring is not present in the mainstring


indeces.length -> number of ocurrences of the substring

capitalize(mainstr) -> Mississippi

maketitle("creating modules in node javascript environment") -> Treating Modules In Node Javascript Environment

formatstr("french") -> F R E N C H

removePuntuations(mainstr)
<- Hi!, this is Raj. I am learning Node.js
-> hi this is raj i am learning node js



*/

const text = "mississippi";
const searchstr = "ss";
const indeces = getindeces(text, searchstr);
// console.log(text.slice[indeces[0][0], indeces[0][1]]); // --> ss
// console.log(text.slice[indeces[1][0], indeces[1][1]]); // --> ss


console.log(maketitle("creating modules in node javascript environment"));
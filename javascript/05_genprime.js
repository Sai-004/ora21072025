var N = 100;

var count = 0;
var currNumber = 1;
var prime = true;
var primeContainer = [];

while (true){
    console.log(currNumber)
    prime = true;
    for(i = 2; i < currNumber;i++){
        if(currNumber % i == 0){
            prime = false;
            break;
        }
    }
    if(prime == true){
        primeContainer.push(currNumber);
        count++;
    }
    if(count == N){
        break;
    }
    currNumber++;
}

console.log(primeContainer, count);
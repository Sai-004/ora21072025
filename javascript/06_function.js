
function checkprime(n){
    var prime = true;
    for(i = 2; i < n; i++){
        if(n % i == 0){
            prime = false;
            break;
        }
    }
    return prime;
};


console.log(checkprime(11));

var primes = [];
for(n = 1; n <= 100; n++){
    if(checkprime(n) == true){
        primes.push(n);
    }
}

console.log(primes);
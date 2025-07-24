var N = 20;

// 90 -> divisible by only 1 and itself(90)
// 2 - 89 -> cannot divide 90

var prime = true;
for(i = 2; i < N; i++){
    if(N % i == 0){
        prime = false;
        break;
    }
}

if(prime == true){
    console.log("This is a prime number")
} else {
    console.log("This is not a prime number")
}
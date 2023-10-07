function sumOfDigits(n){
    let sum=0,r
    while(n>0){
        r=n%10
        sum=sum+r
        n=parseInt(n/10)
    }
    return sum
}
console.log(sumOfDigits(55));
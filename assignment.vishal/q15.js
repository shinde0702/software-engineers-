




function main(n){
    
    for(i=2; i<=n; i++){
        if(n%i==0){
       
            return'not a prime number'
        }
        else{
            return'prime number'
        }
    }

}
let num=main(11)
console.log(num)

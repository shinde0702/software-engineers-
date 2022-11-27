
function factorial(num){
    let a=1;
    for(i=1;i<=num;i++){
         a=a*i
      }
      return a;
}
let result=factorial(5)
console.log( 'factorial is =', result)
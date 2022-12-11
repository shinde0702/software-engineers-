// let marks=parseInt(prompt('Enter your marks'))

function myName(){
    let marks=document.getElementById('num').value;
if(marks>=90){
    document.write('pass with A grade')
}
else if(marks>=70){
    document.write('pass with B grade')
}
else if(marks>=50){
    document.write('pass with C grade')
}
else{
    document.write('pass with D grade')
}
}

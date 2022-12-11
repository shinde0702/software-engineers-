let Name=prompt("Enter ur name")
let address=prompt("enter ur adress")
let amount=prompt("enter amount of purchase")
let type=prompt("type of purchase\n enetr L for laptop \n D for desktop")


let d;

if(type=="L"){

if(amount>0 && amount<2500){
    d=0;
}
else if(amount>2500 && amount<57000){
    d=5;
}

else if(amount>57001 && amount<100000){
    d=7.5
}

else if(amount>100000){
    d=10;
}


else{
   document.write( "output")
}
let damount=(d/100)*amount;
let netAmount=amount-damount;

document.write('Name -'+Name+"<br>")
document.write("address - "+address+"<br>")
document.write("Total amount of purchase -"+amount+"<br>")
document.write("Discount Available -" +d+"<br>")
document.write("Net Payable Amount -"+netAmount)

}

else if(type=="D"){

if(amount>0 && amount<2500){
    d=5;
}
else if(amount>25001 && amount<57000){
    d=7.5;
}
else if (amount>57001 && amount<100000){
    d=10;
}
else if(amount>100000){
    d=15;
}

else{
    document.write("Outpur")
}

let damount=(d/100)*amount;
let netAmount=amount-damount;
document.write('Name -'+Name+"<br>")
document.write("address - "+address+"<br>")
document.write("Total amount of purchase -"+amount+"<br>")
document.write("Discount Available -" +d+"<br>")
document.write("Net Payable Amount -"+netAmount)
}

  let age=prompt("Enter Your Age")
  let gender=prompt("Enter Your Gender")
  let TI=prompt("Enter Your Taxable Income ")


  if(age>65 || gender=="F"){
    console.log("Wrong Category")
  }
  else if(age<=65 || gender=="M"){

if(TI<=160000){
    console.log("TI Not Aplicable")
}
else if(TI>160000 && TI<=500000){
    tax=((TI-160000)*10/100)
}
else if(TI>500000 && TI<=800000){
    ((TI-500000)*(20/100))+34000
}
else (TI>800000);{

tax=((TI-800000)*(30/100))+94000
}
document.write("Payable IT - ",tax)
}
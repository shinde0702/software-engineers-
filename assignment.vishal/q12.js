

let          

customer=prompt('enter your name')
a=parseInt(prompt('Enter 1 for laptop Enter 2 for desktop'))
purchaseAmount=prompt('Enter purchase amount')
document.write(customer)

switch(a){
    case 1:
        {
            if((purchaseAmount>=0)&&(purchaseAmount<=25000)){
             let p=purchaseAmount*(0/100)
                x=purchaseAmount-p
                document.write('payable amount of u with discount'+ x)
    
               
        }
          else if((purchaseAmount>=25001)&&(purchaseAmount<=57000)){
            let p=purchaseAmount*(5/100)
            x=purchaseAmount-p
            document.write(' payable amount of u with discount '+x)
        }
        else if((purchaseAmount>=57001)&&(purchaseAmount<=100000)){
         let p=purchaseAmount*(7.5/100)
         x=purchaseAmount-p
         document.write( ' payable amount of u with discount '+x)
        }
        else if (purchaseAmount>=100000){
         let p=purchaseAmount*(10/100)
         x=purchaseAmount-p
         document.write(' payable amount of u with discount '+x)
        }
        else{
           document.write('opps somthing went wrong  ___ERROR...')
        }
        break;}
         

  case 2:
        {
            if((purchaseAmount>=0)&&(purchaseAmount<=25000)){
               let p=purchaseAmount*(5/100)
               x=purchaseAmount-p
               document.write(' payable amount of u with discount '+x)
        }
          else if((purchaseAmount>=25001)&&(purchaseAmount<=57000)){
            let p=purchaseAmount*(7.5/100)
            x=purchaseAmount-p
            document.write(' payable amount of u with discount '+ x)        }
        else if((purchaseAmount>=57001)&&(purchaseAmount<=100000)){
         let p=purchaseAmount*(10/100)
         x=purchaseAmount-p
         document.write( ' payable amount of u with discount '+x)        }
        else if (purchaseAmount>=100000){
         let p=purchaseAmount*(15/100)
         x=purchaseAmount-p
         document.write(x)        }
        else{
           document.write('opps somthing went wrong  ___ERROR...')
        }
        break;
       }}
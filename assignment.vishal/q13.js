let age=parseInt(prompt('ur age'))
    gender=prompt('male or female')
    ti=parseInt(prompt('ur taxable income'))
   

if(gender==='male' && age<=65){
         if(ti>=160000 && ti<=500000){
                let x=((ti-160000)*(10/100))
                document.write('Your tax amount is' +x)
         }
         else if(ti>=500001 && ti<=800000){
            let x=((ti-160000)*(20/100))+34000
                document.write('Your tax amount is' +x)
         }
         else if(ti>=800001){
            let x=((ti-160000)*(30/100))+94000
                document.write('Your tax amount is' +x)
         }
         else{
            document.write('you will not have to pay any tax')
         }

        }
else if(gender==='female'||age>=66){
    document.write('<h1>Wrong catogary</h1>')
}
else{
    document.write('please fill right information')
}
        
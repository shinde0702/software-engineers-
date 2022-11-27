function subseq(){
    let x=0;
        y=1;
    
for(i=1;i<=15;i++){
    pell=x+2*y    
    
    console.log(pell);
   
    x=y
    y=pell
}
}
subseq()
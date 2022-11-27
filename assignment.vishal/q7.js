function main()
{
let p, r,t,si;


p=prompt ('Enter the principal'); 
t=prompt ('Enter the Duration'); 
r=prompt ('Enter the Rate');
si=(p*r*t)/100;

document.write("<h1> Simple Interest= "+si,'</h1>');
}
main()
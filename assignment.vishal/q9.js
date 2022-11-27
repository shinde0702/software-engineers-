var a=parseInt(prompt('1 for good 2 for better  3 for best'))

if (a==1)

document.write("good <br>");

else if (a==2) 
document.write("better <br>");

else if (a==3)

document.write("best <br>");

else

document.write("invalid <br>");

switch (a)
{
case 1:

    document.write("good");

break;
 case 2:

    document.write("better");

break;

case 3:

    document.write("best");

break;

default:

    document.write("invalid");}
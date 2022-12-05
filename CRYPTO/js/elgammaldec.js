var c2,c1,d,p;
function value4(){
	p=document.getElementById('aa').value;
	
	c1=document.getElementById('yy').value;
	c2=document.getElementById('xx').value;
      d=document.getElementById('zz').value;
	
	
}

function elgdec()
{
value4();
var res1=Math.pow(c1,d);
res1=parseInt(res1);
var res2,fres;
var i=1;
while(i)
{
res2=(res1*i);
res2=res2 % p;
if(res2==1)
{
  	fres=i;
   	fres=parseInt(fres);
	break;
}
else
{
i+=1;
}
}
var pt=c2*fres;
pt=parseInt(pt);
pt=pt%11;
 document.getElementById("elg_dec").innerHTML =pt;
event.preventDefault();
}



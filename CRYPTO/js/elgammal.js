var m ,e1,r,p,d;
function value3(){
	p=document.getElementById('pe').value;
	
	e1=document.getElementById('elge1').value;
	r=document.getElementById('r').value;
      d=document.getElementById('dekey').value;
	m=document.getElementById('plaintextelg').value;
	
}

function elgenc()
{
value3();
var product=new Array(2);
var e2=Math.pow(e1,d)%p;
e2=parseInt(e2);
var c1=Math.pow(e1,r)%p;
c1=parseInt(c1);   
var c2=(m*Math.pow(e2,r))%p;
c2=parseInt(c2);
product[0]=c1;
product[1]=c2

 document.getElementById("elg_enc1").innerHTML =product[0];
 document.getElementById("elg_enc2").innerHTML =product[1];
event.preventDefault();
}



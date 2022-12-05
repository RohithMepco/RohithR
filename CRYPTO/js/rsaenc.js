var m,e,p,q;
function value(){
	p=document.getElementById('p').value;
	q=document.getElementById('q').value;
	e=document.getElementById('e').value;
	m=document.getElementById('m').value;
	//ct=document.getElementById('ct').value;
}

function rsa()
{
value();
  var gcd,ee,i,x,t,d;
    gcd = function (a, b) { return (!b) ? a : gcd(b, a % b); };
    var n = p * q;
    t = (p - 1) * (q - 1);
    
    if (gcd(e, t) == 1) 
	{
		for (i = 0; i < t; i++)
		{
			x = 1 + i * t;
			if (x % e == 0 ) 
			{
				d = x / e;
				break;
			}
		}
	}
   var r,i=0,prod=1,rem_mod=0;
   while (e>0)
   {
      r=e % 2;
      if (i++==0)
         rem_mod=m % n;
      else
         rem_mod=Math.pow(rem_mod,2) % n;
      if (r==1)
      {
         prod*=rem_mod;
         prod=prod % n;
      }
      e=parseInt(e/2);
   }
      

   document.getElementById("op_rsa_cipher").innerHTML = prod;
   event.preventDefault();
}



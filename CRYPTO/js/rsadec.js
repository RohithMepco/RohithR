var m,e,p,q,ct;
function valued(){
	p=document.getElementById('p1').value;
	q=document.getElementById('q1').value;
	e=document.getElementById('e1').value;
	//m=document.getElementById('m').value;
	ct=document.getElementById('ct').value;
}
function rsadec()
{
valued();
  var gcd,ee,i,x,t,d,prod;

    var n = p * q;
    t = (p - 1) * (q - 1);
 
   
		for (i = 0; i < t; i++)
		{
			x = 1 + i * t;
			if (x % e == 0 ) 
			{
				d = x / e;
				break;
			}
		}

   var r,i=0,prod=1,rem_mod=0;
   while (d>0)
   {
      r=d % 2;
      if (i++==0)
         rem_mod=ct % n;
      else
         rem_mod=Math.pow(rem_mod,2) % n;
      if (r==1)
      {
         prod*=rem_mod;
         prod=prod % n;
      }
      d=parseInt(d/2);
   }
   document.getElementById("op_rsa_plain").innerHTML = prod;
   event.preventDefault();


//dt = dtt % n;

}
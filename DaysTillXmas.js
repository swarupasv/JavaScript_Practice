// Write your code here.
var d = new Date();
var date = d.getDate();
var month = d.getMonth();
var s=[0,2,4,6,7,9];
var sum=0;
if(month==11 && date>25)
{
  sum=sum+31-date;
  myFunc(date,month,sum);
}
else
{
myFunc(date,month,sum);
}
function myFunc(date,month,sum)
{
  if(month==11)
  {
    month=0;
    date=0;
  }
  for(var i=month+1;i<11;i++)
{
  if(s.includes(i))
     {
     		sum=sum+31;
     }
  else
  {
    if(i==1)
    {
      sum=sum+28;
    }
  else
  {
    sum=sum+30;
  }
}
}
sum=sum+25
if(month==1)
{
  sum=sum+(28-date);
}
else
{
  if(s.includes(month))
     {
     		sum=sum+31-date;
     }
  else
  {
    sum=sum+30-date;
  }
}
console.log(sum+" days till christmas");
}


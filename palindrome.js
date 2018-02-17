var a = prompt("Enter a String:");
if(a === a.split("").reverse().join(""))
{
  console.log("True");
}
else
{
  console.log("False");
}
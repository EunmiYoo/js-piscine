export default function helloSomeone(message)
{
   if(typeof message == "string")
   {
      if(message == "")
      {
         console.log("Who are you?");
      }
      else 
      {
         console.log("Hello " + message + "!");
      }
   }
   if(typeof message == "number")
   {
      if(message <= 0)
      {
         console.log("I am Benjamin Button!");
         
      }
      if(isNaN(message))
      {

       console.log("Age is just a number");
      }
      else if(message > 0)
      {
      console.log("My age is " + message);
      }
   }
   if(typeof message == "object")
   {
    console.log("I am null and void");
   }
   if(typeof message == "undefined")
    {
    console.log("Nobody can define me!");
   }
   //if(typeof message == "NaN")
   //{
    //console.log("Age is just a number");
   //}
}

//helloSomeone("42");
// helloSomeone("");
/* helloSomeone(null);
helloSomeone(42);
helloSomeone(-1);
helloSomeone(NaN);
helloSomeone(undefined); */
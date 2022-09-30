const month = 7;
let day = 13;

const timeWarp = (newMonth, newDay) => {
   let day = newDay;
   if (month == 7)
   {
    let month = newMonth;
   }
   console.log(newMonth + " " + newDay);
}

timeWarp(5, 10);

timeWarp(11, 20);
console.log(month + " " + day);

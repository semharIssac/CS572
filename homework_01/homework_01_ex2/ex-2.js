function isWeekend(){
  const todayDate = new Date();
  const day = todayDate.getDay();
  const arr = ['Weekend','Weekday','Weekday','Weekday','Weekday','Weekday','Weekend' ]

  return arr[day];

}
console.log(isWeekend());
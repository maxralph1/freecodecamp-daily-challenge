function oddOrEvenDay(timestamp) {
  let date = new Date(timestamp);
  // let day = date.getDate();
  
  date.setUTCHours(0, 0, 0, 0);
  let day = date.getUTCDate();
  
  // const dayOfMonth = date.getDate();
  /*
  if (day%2==0) {
    return "even";
  } else {
    return "odd";
  }
  */
  // console.log(day);
  // console.log(date);
  return (day % 2 === 0) ? "even" : "odd";
}

// console.log(oddOrEvenDay(1769472000000))
// console.log(oddOrEvenDay(6739456780000))
function groundhogDayPrediction(appearance) {
  if (typeof appearance != 'boolean') {
     return "No prediction this year."
  } else if (appearance == true) {
     return "Looks like we'll have six more weeks of winter."
  } else if (appearance == false) {
     return "It's going to be an early spring."
  } 
}
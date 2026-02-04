def groundhog_day_prediction(appearance):
  if not isinstance(appearance, bool):
     return "No prediction this year."
  elif appearance == True:
     return "Looks like we'll have six more weeks of winter."
  elif appearance == False:
     return "It's going to be an early spring."
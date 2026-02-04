def truncate_text(text):
  if (len(text) <= 20):
     return text
  else:
     return text[:17] + '...'

  # return text if (len(text) <= 20) else (text[:17] + '...')
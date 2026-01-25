def get_bingo_letter(n):
   if not n:
       return None
   if ((n>=61) and (n<=75)):
       return "O"
   elif ((n>=46) and (n<=60)):
       return "G"
   elif ((n>=31) and (n<=45)):
       return "N"
   elif ((n>=16) and (n<=30)):
       return "I"
   elif ((n>=1) and (n<=15)):
       return "B"
"""
import datetime

def odd_or_even_day(timestamp):
    date = datetime.datetime.fromtimestamp(timestamp / 1000)
    
    day_of_month = date.day
    
    if day_of_month % 2 == 0:
        return "even"
    else:
        return "odd"
"""


from datetime import datetime, timedelta

def odd_or_even_day(timestamp):
    date = datetime.utcfromtimestamp(timestamp / 1000)
    date = date.replace(hour=0, minute=0, second=0, microsecond=0)
    day = date.day
    return "even" if day % 2 == 0 else "odd"

# print(odd_or_even_day(1769472000000))
# print(odd_or_even_day(6739456780000))
    
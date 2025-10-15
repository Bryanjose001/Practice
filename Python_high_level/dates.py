#dates
from datetime import date, datetime
now =  datetime.now()
def print_date(date):
    print(now.year)
    print(now.month)
    print(now.day)
    print(now.hour)
    print(now.minute)
    print(now.second)
    print(now.microsecond)
    print(timestamp)


timestamp = now.timestamp()

print(timestamp)






year_2026 = datetime(2026,1,1)

print(year_2026)


from datetime import time 


current_date = date.today()

print(current_date.year)
print(current_date.month)
print(current_date.day)

current_date = date(2021, 10, 6 )

print(current_date.year)
print(current_date.month)
print(current_date.day)

current_date = date(current_date.year , current_date.month + 1, current_date.day)

print(current_date.month)


diff =  year_2026 - now
print(diff)
print


from datetime import timedelta




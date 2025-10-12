#dates
from datetime import datetime
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


current_time = time(21,6,3)

print(current_time.hour)
print(current_time.min)
print(current_time.second)
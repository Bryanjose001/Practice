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


timestamp = now.timestamp()

print(timestamp)






year_2026 = datetime(2026,1,1)

print(year_2026)


from datetime import time 


current_time = time()

print_date(current_time)

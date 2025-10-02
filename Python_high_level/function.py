#function

def my_function ():
    print('esto es un funcion')

my_function()

def sum_two_values(first_number, second_number):
    print(first_number+second_number)

sum_two_values(5,2)

def sum_two_values(first_number, second_number):
    print(first_number+second_number)
    
    #return(5,2)


def sum_two_values(num1,num2):
    print(num1+num2)

sum_two_values(23,2)


def area_of_circle(r):
    3.14 * r * r
    print(3.14 * r * r)
area_of_circle(5)


def add_all_nums(*args):
    total = 0
    for arg in args:
        if isinstance(arg, (int,float)):
            total += arg 
        else:
            print(f'warning:{arg} is not a nu,mber and wil be skipped')
    return total

result = add_all_nums(23,2,78)
print(result)



def convert_celsius_to_fahrenheit(celsius):
    9/5 + 32
    fahrenheit = (celsius * 9/5) + 32
    return(fahrenheit)
print(convert_celsius_to_fahrenheit(50))

    
def check_season(month):
    month = month.lower()
    Autumn = ['september', 'october', 'november']
    Winter = ['december', 'january', 'february']
    Spring = ['march', 'april', 'may']
    Summer = ['june', 'july', 'august']
    if month in Autumn:
     return'Autumn'
    elif month in Winter:
        return'Winter'
    elif month in Spring:
        return'Spring'
    elif month in Summer:
        return 'Summer'
    else:
        return'invalid month'
month = input('Enter your favorite month: ')
print(f'The season is :{check_season(month)} ')


def calculate_slope():

def print_list(my_list):
    for elment in my_list:
        print(elment)
print_list(my_list=[2,23,1,5])







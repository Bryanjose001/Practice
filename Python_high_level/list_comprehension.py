'''List Comprehension'''

my_original_list = [0,1,2,3,4,5,6,7]
print(my_original_list)


my_range = range(8)
print(list(my_range))

my_list =[i + 1 for i in range (8)]
print(my_list)

my_list =[i for i in range (8)]
print(my_list)

my_list =[i * i for i in range (8)]
print(my_list)

my_list =[i * 2 for i in range (8)]
print(my_list)



def sum_three(number):
    return number +  3


my_list = [sum_three(i) for i in range(8)]
print(my_list)



numbers  = [-4,-3,-2,-1,0,2,4,6]
positive_numbers = [i for i in numbers if i % 1 == 0 and i > 0]
print(positive_numbers)
#modules
'''from function import sum_two_values

function.sum_two_values(3,7)'''
import random
import string 

def random_number_id(): 
    random_user_id = ''
    characters = string.digits
    for y in range(6):
        random_user_id += random.choice(characters)
    return random_user_id

print(random_number_id())
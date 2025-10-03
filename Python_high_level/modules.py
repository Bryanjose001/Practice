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



def user_id_gen_by_user(): 
    list_of_id = []
    num_char = int(input('how many char in id: '))
    num_ids = int(input('how many id you want: '))
    characters = string.ascii_letters + string.digits
    for elment in range(num_ids):
        current_id = ''
        for y in range(num_char):
            current_id += random.choice(characters)
        list_of_id.append(current_id)

    return list_of_id

print(user_id_gen_by_user())




def rgb_color_gen():
    



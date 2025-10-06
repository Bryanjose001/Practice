#modules
import random
import string 
'''from function import sum_two_values

function.sum_two_values(3,7)


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
    my_first_rgb = random.randint(0,255)
    my_second_rgb = random.randint(0,255)
    my_third_rgb = random.randint(0,255)
    return f'rgb({my_first_rgb},{my_second_rgb},{my_third_rgb})'
print(rgb_color_gen())


def list_of_hexa_colors():
    my_hexa_list = '0123456789abcdef'
    my_hexa =  ''.join(random.choice(my_hexa_list) for b in range(6))
    my_second_hexa = ''.join(random.choice(my_hexa_list)for b in range(6))
    my_third_hexa = ''.join(random.choice(my_hexa_list)for b in range(6))
    return f'hexa = [#{my_hexa},#{my_second_hexa},#{my_third_hexa}]'
print(list_of_hexa_colors())'''


def list_of_rgb(num):
    colors = []
    for b in range(num):    
        my_rgb = random.randint(0,255)
        my_second_rgb = random.randint(0,255)
        my_third_rgb = random.randint(0,255)
    color = f'rgb{my_rgb},{my_second_rgb},{my_third_rgb}'
    colors.append(color)
print(list_of_rgb())


    








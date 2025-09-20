# lstas 
my_list = list()
mi_otra_lista = ['bryan',27,7,3,4]
mixed_data_types = ['Bryan',23,5.10,'Married','Puerto Rico']
front_end = ['HTML', 'CSS', 'JS', 'React', 'Redux']
back_end = ['Node','Express', 'MongoDB']
joint_ends = front_end + back_end
full_stack = joint_ends
full_stack = joint_ends.copy()
joint_ends.insert(4,'python')
joint_ends.insert(5,'SQL')


print(type(my_list))
print(mi_otra_lista)
print(len(mi_otra_lista))
print(mi_otra_lista[0])
print(mi_otra_lista[2])
print(mi_otra_lista[4])
print(joint_ends)
print(full_stack)
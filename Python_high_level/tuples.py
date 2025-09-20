#tuple
my_tuple = tuple()
my_other_tuple = ()
my_tuple = (35,45,'hola')
mis_hermanos = ('Alejandro','Joha','Bryan')
mis_padres = ('Nilma','Alberto')
mi_familia = mis_hermanos + mis_padres
alejandro,joha, bryan,nilma,alberto = mi_familia
frutas = ('manzana','pera','akakkak')
vegetales = ('cebolla','tomate','lalal')
productos_animales = ('comida','baalal','lol')
food_stuff_tp = frutas + vegetales + productos_animales
food_stuff_tp = list(food_stuff_tp)
food_stuff_lt = food_stuff_tp
first_items = food_stuff_lt[0:3]
last_items = food_stuff_lt[-3:]

del food_stuff_tp

nordic_countries = ('Denmark', 'Finland','Iceland', 'Norway', 'Sweden')

print(len(food_stuff_lt))
print(my_other_tuple)
print(my_tuple)
print(len(mis_hermanos))

#tuple is the same as a list but it connt be mutablable
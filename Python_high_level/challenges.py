'''challenges'''

'''/*
Escribe un programa que muestre por consola (con un print) los
números de 1 a 100 (ambos incluidos y con un salto de línea entre
cada impresión), sustituyendo los siguientes:
Múltiplos de 3 por la palabra "fizz".
Múltiplos de 5 por la palabra "buzz".
Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 

my_buzz = 0
while my_buzz < 100:
    my_buzz = my_buzz + 1
    if my_buzz % 3 == 0 and my_buzz % 5 == 0:
        print('fizz buzz')
    elif my_buzz % 3 == 0:
        print('fizz')
    elif my_buzz % 5 == 0:
        print('buzz')
    else:
        print(my_buzz)
'''

def fizzbuzz():
    for index in range(100):
        print(index)
fizzbuzz()
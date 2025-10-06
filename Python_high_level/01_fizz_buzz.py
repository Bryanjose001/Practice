'''/*
Escribe un programa que muestre por consola (con un print) los
números de 1 a 100 (ambos incluidos y con un salto de línea entre
cada impresión), sustituyendo los siguientes:
Múltiplos de 3 por la palabra "fizz".
Múltiplos de 5 por la palabra "buzz".
Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 '''

my_buzz = 0
while my_buzz < 101:
    print(my_buzz)
    my_buzz =  my_buzz + 1
    if my_buzz % 3 == 0:
        print('fizz')
    elif my_buzz % 5 == 0:
        print('buzz')
    elif my_buzz % 3 == 0:
        my_buzz % 5 == 0
        print('fizz buzz')











'''def fizz_buzz():
    for b in range(101):'''
        
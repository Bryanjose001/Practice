'''challenges'''

'''/*
Escribe un programa que muestre por consola (con un print) los
números de 1 a 100 (ambos incluidos y con un salto de línea entre
cada impresión), sustituyendo los siguientes:
Múltiplos de 3 por la palabra "fizz".
Múltiplos de 5 por la palabra "buzz".
Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
'''

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

def fizzbuzz():
    for index in range(1,101):
        if index % 3 == 0 and index % 5 == 0:
            print('fizzbuzz')
        elif index % 3 == 0:
            print('fizz')
        elif index % 5 == 0:
            print('buzz')
        else:
            print(index)
fizzbuzz()


def anagrama(word1, word2):
    if word1.lower() == word2.lower():
        return False
    return sorted(word1.lower()) == sorted(word2.lower())
print(anagrama('amor','roma'))



def fibonacci():
    prev = 0
    next = 1

    for index in range(0,50):
        print(prev)
        fib = prev + next
        prev = next
        next = fib

fibonacci()


def numeroprimo():
    for numero in range(1,101):
        if numero < 2:
            return False
        for index in range(2,numero):
            if numero %  index == 0:
                return False

    return True
numeroprimo()
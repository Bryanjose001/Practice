#condiciones
'''my_condition = False

if my_condition:
    print('si es es true aparace3 el if')

print('la condicion continua')

segunda_cond = 2 + 5

if segunda_cond:
    print('es mayor que 7')
else: 
    print('no es mayor que 7')

Edad = 18
Edad = int(input('Cual es tu edad: '))
if Edad>= 18:
    print('you are old enough to learn to drive')
else:
    print('you need more years to drive')

my_age = 23
your_age = int(input('cual es tu edad: ?'))
if your_age == 23:
    print('estas en la edad que es!')
elif your_age > 23:
    print('estas viejo')
else:
    print('Estas joven todavia!')



Num1 = int(input('Cual es tu numero favorito: '))
Num2 = int(input('Cual es tu segundo numero favorito: '))
if Num1 > Num2:
    print(f"{Num1} es mauor que  {Num2}")
elif Num1 < Num2:
    print(f"{Num1} es menor  que {Num2}")
else:
    print('Los dos son iguales')


grade = int(input('Cual es tu score: '))
if grade >= 80 and grade <= 100:
    print('Tienes A')
elif grade >= 70 and grade <= 89:
    print('Tienes B')
elif grade >= 60 and grade <= 69:
    print('Tienes C')
elif grade >= 50 and grade <= 59:
    print('Tienes D')
elif grade >= 0 and grade <= 49:
    print('Tienes F')


otoño = ["september", "october", "november"]

invierno = ["december", "january", "february"]

primavera = ["march", "april", "may"]

verano = ["june", "july", "august"]

mes =(input('Cual es tu mes favorito?: '))
mes = mes.lower()
if mes in otoño:
    print('esto es otono')
elif mes in invierno:
    print('esto es Invierno')
elif mes in primavera:
    print('esto es primavera')
elif mes in verano:
    print('esto es verano')



fruta = ['banana', 'orange', 'mango', 'lemon']
fruta_favorita = (input('cual es tu frutra favorita?: '))
fruta_favorita = fruta_favorita.lower()
if fruta_favorita in fruta:
    print('That fruit already exists in the list')
else:
    fruta.append(fruta_favorita)
    print(fruta)
'''

person={
    'first_name': 'Bryan',
    'last_name': 'Camacho',
    'age': 23,
    'country': 'Puerto Rico',
    'is_marred': False,
    'skills': ['JavaScript', 'React', 'Node', 'MongoDB', 'Python'],
    'address': {
        'street': 'Salinas',
        'zipcode': '00751'
    }
}


'''if 'skills' in  person:
    print(len(person['skills']))

person['skills'][2]'''

if 'Python' in person['skills']:






#condiciones son instrucciones que permiten a un programa tomar decisiones y ejecutar diferentes bloques de código según si se cumple un requisito
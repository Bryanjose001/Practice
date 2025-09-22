#sets
my_set = set()
my_other_set = {}
my_other_set = {'bryan','hola',45}

# practice sets
it_companies = {'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'}
A = {19, 22, 24, 20, 25, 26}
B = {19, 22, 20, 25, 26, 24, 28, 27}
age = [22, 19, 24, 25, 26, 24, 25, 24]
it_companies.add('twiter')
it_companies.update(['tesla','samsung'])
it_companies.remove('twiter')
#the difecence between remove and discard is that remove it will give you and error and discard wont
A | B
A.intersection(B)
A.issubset(B)
A.isdisjoint(B)
A | B , B | A
A.symmetric_difference(B)
del A,B
age_set =set(age)
#age  is bigger that age_set
'''the diffence between string, list , tuple ,sets is that String: Una cadena(string)es una secuencia de caracteres que no se puede modificar.
List:Una lista(list)es una colección ordenada de elementos que se pueden cambiar.
Tuple: Una tupla(tuple)es una colección ordenada de elementos que no se pueden modificar.
Set: Un conjunto(set)es una colección desordenada de elementos únicos que se pueden modificar.
'''
st = ('I am a teacher and I love to inspire and teach people')
st = st.split()
st = set(st)




print(len(st))
print(len(age))
print(len(age_set))
print(len(it_companies))
print(type(my_set))
print(type(my_other_set))
print (my_other_set)
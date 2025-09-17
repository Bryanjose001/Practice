#clases

class Persona:
    def __init__(self,name,surname,age):
        self.name = name
        self.surname = surname
        self.age = age
    
my_persona = Persona('Bryan','Camacho',23)
print(my_persona.name,my_persona.surname,my_persona.age)

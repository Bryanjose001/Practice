### Higher Order Functions ###
def sum_one(value):
    return value + 1


def sum_two_values_plus_one(values1,values2):
    return sum_one(values1 + values2)
print(sum_two_values_plus_one(5,2))
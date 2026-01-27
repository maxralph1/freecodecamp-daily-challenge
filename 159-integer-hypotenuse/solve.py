import math

def is_integer_hypotenuse(a, b):
    squares = (a * a) + (b * b)
    hypotenuse = math.sqrt(squares)

    return hypotenuse.is_integer()

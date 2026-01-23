import re

def is_valid_hex(s):

    # hex_pattern = r'^#[0-9A-Fa-f]{6}$'
    hex_pattern = r'^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$'
    return bool(re.match(hex_pattern, s))

is_valid_hex("#FFFFFF")  # True
is_valid_hex("#123ABC")  # True
is_valid_hex("#GHIJKL")  # False
is_valid_hex("#12345")
is_valid_hex("#123")
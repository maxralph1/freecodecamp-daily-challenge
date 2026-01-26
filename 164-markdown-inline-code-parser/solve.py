def parse_inline_code(markdown):
    is_open = False
    result = []

    for char in markdown:
        if char == "`":
            is_open = not is_open
            result.append("<code>" if is_open else "</code>") 
        else:
            result.append(char) 

    return ''.join(result)
    
def parse_link(markdown):
    start_title = markdown.index('[') + 1
    end_title = markdown.index(']')
    start_link = markdown.index('(') + 1
    end_link = markdown.index(')')

    return f'<a href="{markdown[start_link:end_link]}">{markdown[start_title:end_title]}</a>'

#result = parse_link("[freeCodeCamp](https://freecodecamp.org/)")
#print(result)

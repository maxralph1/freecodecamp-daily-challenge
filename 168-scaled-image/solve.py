def scale_image(size, scale):
    width, height = map(int, size.split("x"))
    # return f"{width * scale}x{height * scale}"
    return f"{int(width * scale)}x{int(height * scale)}"


# print(scale_image("800x600", 2))  # "1600x1200"
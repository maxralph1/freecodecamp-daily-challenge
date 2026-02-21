def count_change(change):
    initial_total = sum(change)

    base = initial_total // 100
    coins = initial_total % 100

    coins_formatted = f"{coins:02d}"

    return f"${base}.{coins_formatted}"

print(count_change([25, 10, 5, 1])) 
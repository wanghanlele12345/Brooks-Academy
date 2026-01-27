import os
import re

def main():
    files = [f for f in os.listdir('.') if f.endswith('.md')]
    for filename in files:
        # Match pattern XX-something.md
        match = re.match(r'^(\d+)-(.*)$', filename)
        if match:
            new_name = match.group(2)
            if new_name != filename:
                print(f"Renaming: {filename} -> {new_name}")
                os.rename(filename, new_name)

if __name__ == "__main__":
    main()

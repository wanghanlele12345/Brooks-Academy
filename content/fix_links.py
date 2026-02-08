import os
import re

root_dir = "The_Art_and_Science_of_Technical_Analysis_Reconstructed"
book_name = "The_Art_and_Science_of_Technical_Analysis_Reconstructed"

# Regex to match ![Caption](../media/images/Filename.ext)
pattern = re.compile(r'!\[(.*?)\]\(\.\./media/images/(.*?)\)')

for root, dirs, files in os.walk(root_dir):
    for filename in files:
        if not filename.endswith(".md"): continue
        
        filepath = os.path.join(root, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replacement string: ![[Book/Images/images/\2|\1]]
        # We construct it safely without f-string backslash confusion
        replacement = r'![[' + book_name + r'/Images/images/\2|\1]]'
            
        new_content = pattern.sub(replacement, content)
        
        if new_content != content:
            print(f"Fixing links in {filepath}")
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
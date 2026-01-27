import os

def process_file(filepath):
    with open(filepath, 'r') as f:
        lines = f.readlines()

    # Find indices of '---' lines
    dash_indices = [i for i, line in enumerate(lines) if line.strip() == '---']

    # We need at least 4 dashes to have two blocks
    if len(dash_indices) < 4:
        # print(f"Skipping {filepath}: Less than 4 '---' markers found.")
        return

    # Check if the first block starts at line 0
    if dash_indices[0] != 0:
        # print(f"Skipping {filepath}: Does not start with '---'.")
        return

    # Check adjacency of the first and second block
    # End of first block is dash_indices[1]
    # Start of second block is dash_indices[2]
    
    # Allow 0 or 1 empty line between blocks
    if dash_indices[2] - dash_indices[1] > 2:
        # print(f"Skipping {filepath}: Blocks are not adjacent.")
        return

    # Valid candidate for removal
    # Remove lines from dash_indices[2] to dash_indices[3] (inclusive)
    # But we also need to be careful about newlines. 
    # Usually we want to remove the newline after the first block's end --- as well?
    
    # Let's keep the content of Block 1, and the content after Block 2.
    
    # Lines to keep:
    # 0 to dash_indices[1] (inclusive) -> First block
    # dash_indices[3] + 1 to end -> Content after second block
    
    new_lines = lines[:dash_indices[1]+1] + lines[dash_indices[3]+1:]
    
    # Write back
    with open(filepath, 'w') as f:
        f.writelines(new_lines)
    print(f"Processed {filepath}")

def main():
    files = [f for f in os.listdir('.') if f.endswith('.md')]
    files.sort()
    for f in files:
        process_file(f)

if __name__ == "__main__":
    main()

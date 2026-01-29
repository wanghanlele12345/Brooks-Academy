---
title: "Content Standards & Naming Conventions"
tags: [Guide, Admin, Standards]
order: 0
---

# Content Standards & Naming Conventions

> [!abstract] Purpose
> This document outlines the standardized naming conventions, folder structure, and workflow for adding new books to the **Al Brooks Price Action Academy**. Following these standards ensures consistent navigation, correct sorting, and maintainability.

---

## 1. Directory Structure

The project follows a hierarchical structure based on **Books** $\rightarrow$ **Parts** $\rightarrow$ **Chapters**.

### Root Level
*   **`content/`**: The root directory for all site content.
*   **`content/<Book Title>/`**: A dedicated folder for each book.

### Book Level
Inside `content/<Book Title>/`:
*   **`index.md`**: The entry point for the book. Contains links to Parts.
*   **`Images/`**: A folder containing **all** images used in the book.
*   **`Introduction.md`**: The introduction chapter.
*   **`Backmatter.md`**: References, about the author, etc.
*   **`PART <Roman> - <Part Title>/`**: Sub-folders for each part of the book.

### Part Level
Inside `content/<Book Title>/PART <Roman> - <Part Title>/`:
*   **`00 - PART <Roman> - <Part Title>.md`**: The index/intro page for that specific Part.
*   **`CHAPTER <XX> - <Chapter Title>.md`**: Individual chapter files.

---

## 2. Naming Conventions

### Files
*   **Parts Index**: Must start with `00 - ` to ensure it stays at the top.
    *   *Format*: `00 - PART <Roman> - <Title>.md`
    *   *Example*: `00 - PART I - Breakouts.md`
*   **Chapters**: Must utilize **2-digit padding** for correct sorting (01, 02, ... 10, 11).
    *   *Format*: `CHAPTER <XX> - <Title>.md`
    *   *Example*: `CHAPTER 01 - Example of How to Trade a Breakout.md`
*   **Images**: Keep original filenames if possible (e.g., `nc01f001.jpg`), but store them centrally in the book's `Images/` folder.

### Folders
*   **Parts**: Use Roman numerals.
    *   *Format*: `PART <Roman> - <Title>`
    *   *Example*: `PART II - Magnets Support and Resistance`

---

## 3. Frontmatter Standards

Every Markdown file must have a YAML frontmatter block at the top.

### Standard Template
```yaml
---
title: "CHAPTER 01 - Example of How to Trade a Breakout"
tags: [PriceAction, Breakout, Setup]
order: 4
---
```

*   **`title`**: The display title of the page. Should match the filename (without extension) or be slightly more descriptive.
*   **`tags`**: A list of keywords for search and filtering.
*   **`order`**: An integer to control the sort order in the sidebar explorer.
    *   `1`: List of Terms / Introduction
    *   `2`: Introduction
    *   `3`: Part I
    *   `4`: Chapter 1
    *   ... (Sequential)

---

## 4. Workflow for Adding a New Book

### Step 1: Preparation
1.  Create the book folder: `content/<New Book Title>/`.
2.  Create the `Images` folder: `content/<New Book Title>/Images/`.
3.  Move all raw markdown files and images into these folders.

### Step 2: Organization
1.  **Group Chapters**: Create folders for each Part (e.g., `PART I - ...`) and move relevant chapters into them.
2.  **Rename Files**: Rename chapters to `CHAPTER <XX> - <Title>.md`.
3.  **Create Indexes**:
    *   Rename the Part introduction file to `00 - PART ... .md`.
    *   Ensure the Book root has an `index.md`.

### Step 3: Cleanup (Frontmatter)
Use a script or manual editing to ensure every file has:
1.  Correct `title`.
2.  Correct `order` (sidebar logic).
3.  Relevant `tags`.

### Step 4: Internal Linking
*   **Images**: Ensure image links use the full path or relative path correctly.
    *   *Preferred*: `![[<Book Title>/Images/image.jpg]]` (Obsidian style) or standard Markdown.
*   **Cross-References**: Update the main `content/index.md` to link to the new book.

---

## 5. Helper Script (Python)

You can use the following Python snippet to standardize filenames and frontmatter (adjust `root_dir` as needed):

```python
import os, re

root_dir = "content/Your_Book_Folder"

for root, dirs, files in os.walk(root_dir):
    for filename in files:
        if not filename.endswith(".md"): continue
        
        # Logic to rename "Chapter 1..." to "CHAPTER 01..."
        if filename.lower().startswith("chapter"):
            # Extract number
            match = re.search(r"(\d+)", filename)
            if match:
                num = int(match.group(1))
                new_name = f"CHAPTER {num:02d} - " + filename.split("-", 1)[-1].strip()
                # Rename logic here...
```

---
*Built for the AL BROOKS VALT Project.*

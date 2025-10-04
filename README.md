# snape.oi

**A web-based Snake game inspired by the classic Nokia Snake.**

Players control a snake that grows longer as it eats food. Avoid running into walls or yourself! This project is a team collaboration for learning JavaScript, HTML, and CSS, and eventually, multiplayer features can be added.

---

## Getting Started (for Team Members)

Follow these steps to start contributing:

### 1. Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/gyro-uyt/snape.oi.git
cd snape.io
```

---

### 2. Create Your Personal Branch

Create a branch with your **name** to safely work on your code:

```bash
git checkout -b your-name
```

Example:

```bash
git checkout -b archit
```

> **Tip:** Never work directly on `main` to avoid overwriting others’ work.

---

### 3. Make Your Changes

- Add your code in `src/` (HTML, CSS, JS)
- Add assets like images or sounds in the `assets/` folder

---

### 4. Stage and Commit Your Changes

After editing, stage the files for commit:

```bash
git add .
```

Then commit with a message describing your changes:

```bash
git commit -m "Add snake movement logic"
```

> **Tip:** Write clear commit messages like “Add food spawning” or “Fix collision bug”.

---

### 5. Push Your Branch to GitHub

Send your branch and changes to GitHub:

```bash
git push origin your-name
```

> **Note:** This pushes the code to your branch, So main remains unaffected, then others can merge your work into main after reviewing it.

---

### 6. Review and Merge Changes

- Go to the repo on GitHub
- Click **“Compare & pull request”** for your branch
- Teammates can review and approve the changes
- Once approved, click **“Merge Pull Request”** to merge into `main`

> **Tip:** Always pull the latest `main` before starting new work:

```bash
git checkout main
git pull origin main
```

---

### 7. View Other Team Members’ Branches

To see what your friends are working on:

```bash
git fetch origin
git checkout friend-name
```

Example:

```bash
git checkout pratham
```

---

### 8. Folder Structure

```
snape.io/
├── src/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── assets/
│   └── .gitkeep (placeholder)
├── README.md
└── .gitignore
```

> **Tip:** Keep all HTML, CSS, and JS in `src/` to stay organized.

---

## TL;DR

- `git checkout xyz` → go to a friend's branch to view their work
- `git checkout yourBranchName` → switch back to your own branch
  > ⚠️ **Warning:** Double-check the branch name — a typo can create a _new branch_ by mistake.

---

### When you start working:

1. Always update your local main branch first:

   ```bash
   git checkout main
   git pull origin main
   ```

2. Then switch to your branch:
   ```bash
   git checkout yourBranchName
   ```
3. (Optional) Sync your branch with the latest main:
   ```bash
   git merge main
   ```

---

**When you finish working:**

1. Add all your changes

   ```bash
   git add .
   ```

2. Commit your work with a message

   ```bash
   git commit -m "Describe what you changed"
   ```

3. Push your changes to your branch only

   ```bash
   git push origin yourBranchName
   ```

---

**Optional:**

1. To create a new branch (only if needed):

   ```bash
   git checkout -b newBranchName
   ```

   Then push it the same way:

   ```bash
   git push origin newBranchName
   ```

---

# How to Connect This Folder to GitHub

Follow these steps in order. You’ll do some steps in your **web browser** (on GitHub) and some in the **terminal** (in Cursor or your computer’s terminal).

---

## Part 1: Get Ready on GitHub (in your browser)

### Step 1: Log in or create a GitHub account

- Go to **https://github.com**
- If you don’t have an account: click **Sign up** and create one (or ask Igor for a username/account if your workplace provides one).
- If you do: click **Sign in** and log in.

### Step 2: Create a new repository

- Click the **+** in the top-right and choose **New repository**.
- **Repository name:** e.g. `Playspace` (or any name you like).
- **Description:** optional (e.g. “Learning Cursor and web dev”).
- Choose **Public**.
- **Important:** leave **all** of these **unchecked**:
  - ❌ **Add a README file**
  - ❌ **Add .gitignore**
  - ❌ **Choose a license**  
  (We already have files in your folder, so we don’t want GitHub to add anything yet.)
- Click **Create repository**.

### Step 3: Copy the repository URL

- On the new repo page you’ll see a box that says “Quick setup”.
- Make sure it says **HTTPS** (not SSH).
- Copy the URL. It will look like:
  - `https://github.com/YOUR-USERNAME/Playspace.git`
- Keep this somewhere handy (e.g. paste into a note); you’ll use it in Part 2.

---

## Part 2: Connect Your Folder (in the terminal)

Do these in **Cursor’s terminal** (or any terminal), with your project folder as the current directory.

### Step 4: Open the terminal in your project folder

- In Cursor: **Terminal → New Terminal** (or `` Ctrl+` `` / `` Cmd+` ``).
- If you’re not already in the right folder, run:
  ```bash
  cd /Users/joann/Desktop/Playspace
  ```

### Step 5: Turn this folder into a Git repo (if not already)

Run:

```bash
git init
```

You should see: `Initialized empty Git repository in .../Playspace/.git`

### Step 6: Add all your files

```bash
git add .
```

This stages every file in the folder for the first commit.

### Step 7: Make the first commit

```bash
git commit -m "Initial commit"
```

You should see a short summary of files created/changed.

### Step 8: Name the main branch (optional but recommended)

```bash
git branch -M main
```

This names your main branch `main`, which matches GitHub’s default.

### Step 9: Tell Git where your GitHub repo is

Replace `YOUR-GITHUB-URL` with the URL you copied in Step 3:

```bash
git remote add origin YOUR-GITHUB-URL
```

Example:

```bash
git remote add origin https://github.com/yourusername/Playspace.git
```

### Step 10: Push your code to GitHub

```bash
git push -u origin main
```

- If GitHub asks for a **username**: enter your GitHub username.
- If it asks for a **password**: use a **Personal Access Token**, not your normal GitHub password.
  - To create one: GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)** → **Generate new token**. Give it a name, check **repo**, generate, then copy the token and paste it when Git asks for a password.

After this, your folder and GitHub repo are connected. You should see your files on the GitHub website.

---

## What to do next

- **Later changes:**  
  `git add .` → `git commit -m "Short description"` → `git push`
- **If you get stuck:** ping Elliott (or ask the group) and share the exact message you see in the terminal.

---

## Quick checklist

- [ ] Logged into GitHub and created a new repo (no README, no .gitignore, no license).
- [ ] Copied the repo URL (HTTPS).
- [ ] Ran `git init` in the Playspace folder.
- [ ] Ran `git add .`
- [ ] Ran `git commit -m "Initial commit"`
- [ ] Ran `git branch -M main`
- [ ] Ran `git remote add origin <your-URL>`
- [ ] Ran `git push -u origin main`
- [ ] Refreshed the repo page on GitHub and saw your files.

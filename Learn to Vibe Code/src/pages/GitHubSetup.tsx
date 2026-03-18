export default function GitHubSetup() {
  return (
    <div className="page-github-setup">
      <h1>GitHub Setup</h1>

      <p className="lead">
        Connect your project folder to GitHub so you can push your code and
        collaborate. Follow these steps in order. You’ll do some steps in your
        <strong> browser</strong> (on GitHub) and some in the{' '}
        <strong>terminal</strong> (in Cursor).
      </p>

      <section>
        <h2>Part 1: Get ready on GitHub (in your browser)</h2>

        <h3>Step 1: Log in or create a GitHub account</h3>
        <ul>
          <li>Go to <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a>.</li>
          <li>
            If you don’t have an account: click <strong>Sign up</strong> and
            create one (or ask your team for a username/account if your
            workplace provides one).
          </li>
          <li>If you do: click <strong>Sign in</strong> and log in.</li>
        </ul>

        <h3>Step 2: Create a new repository</h3>
        <ul>
          <li>Click the <strong>+</strong> in the top-right and choose{' '}
            <strong>New repository</strong>.
          </li>
          <li>
            <strong>Repository name:</strong> e.g. <code>my-project</code> or
            any name you like.
          </li>
          <li>
            <strong>Description:</strong> optional (e.g. “Learning Cursor and
            web dev”).
          </li>
          <li>Choose <strong>Public</strong>.</li>
          <li>
            <strong>Important:</strong> leave <strong>all</strong> of these{' '}
            <strong>unchecked</strong>:
            <ul>
              <li>❌ Add a README file</li>
              <li>❌ Add .gitignore</li>
              <li>❌ Choose a license</li>
            </ul>
            (You already have files in your folder, so you don’t want GitHub to
            add anything yet.)
          </li>
          <li>Click <strong>Create repository</strong>.</li>
        </ul>
        <p className="media-placeholder">
          [Screenshot: New repository form with checkboxes unchecked]
        </p>

        <h3>Step 3: Copy the repository URL</h3>
        <ul>
          <li>On the new repo page you’ll see a box that says “Quick setup”.</li>
          <li>Make sure it says <strong>HTTPS</strong> (not SSH).</li>
          <li>
            Copy the URL. It will look like:{' '}
            <code>https://github.com/YOUR-USERNAME/your-repo-name.git</code>
          </li>
          <li>Keep this handy; you’ll use it in Part 2.</li>
        </ul>
        <p className="media-placeholder">
          [Screenshot: Quick setup box with HTTPS URL]
        </p>
      </section>

      <section>
        <h2>Part 2: Connect your folder (in the terminal)</h2>
        <p>
          Do these in <strong>Cursor’s terminal</strong> (or any terminal),
          with your project folder as the current directory.
        </p>

        <h3>Step 4: Open the terminal in your project folder</h3>
        <p>
          In Cursor: <strong>Terminal → New Terminal</strong> (or{' '}
          <kbd>Ctrl+`</kbd> / <kbd>Cmd+`</kbd>). If you’re not already in the
          right folder, run:
        </p>
        <pre><code>cd /path/to/your/project/folder</code></pre>

        <h3>Step 5: Turn this folder into a Git repo (if not already)</h3>
        <pre><code>git init</code></pre>
        <p>You should see: “Initialized empty Git repository in …”</p>

        <h3>Step 6: Add all your files</h3>
        <pre><code>git add .</code></pre>
        <p>This stages every file in the folder for the first commit.</p>

        <h3>Step 7: Make the first commit</h3>
        <pre><code>git commit -m "Initial commit"</code></pre>
        <p>You should see a short summary of files created/changed.</p>

        <h3>Step 8: Name the main branch (optional but recommended)</h3>
        <pre><code>git branch -M main</code></pre>
        <p>This names your main branch <code>main</code>, which matches GitHub’s default.</p>

        <h3>Step 9: Tell Git where your GitHub repo is</h3>
        <p>Replace <code>YOUR-GITHUB-URL</code> with the URL you copied in Step 3:</p>
        <pre><code>git remote add origin YOUR-GITHUB-URL</code></pre>
        <p>Example:</p>
        <pre><code>git remote add origin https://github.com/yourusername/your-repo.git</code></pre>

        <h3>Step 10: Push your code to GitHub</h3>
        <pre><code>git push -u origin main</code></pre>
        <ul>
          <li>If Git asks for a <strong>username</strong>: enter your GitHub username.</li>
          <li>
            If it asks for a <strong>password</strong>: use a{' '}
            <strong>Personal Access Token (PAT)</strong>, not your normal GitHub
            password. To create one: GitHub → <strong>Settings</strong> →{' '}
            <strong>Developer settings</strong> →{' '}
            <strong>Personal access tokens</strong> →{' '}
            <strong>Tokens (classic)</strong> → <strong>Generate new token</strong>.
            Give it a name, check <strong>repo</strong>, generate, then copy
            the token and paste it when Git asks for a password.
          </li>
        </ul>
        <p className="media-placeholder">
          [Screenshot: Terminal showing git init through git push; optional: PAT creation screen]
        </p>
        <p className="media-placeholder">
          [Video: Full GitHub setup — create repo, run commands, handle PAT (~3–4 min)]
        </p>
      </section>

      <p>
        After this, your folder and GitHub repo are connected. You should see
        your files on the GitHub website.
      </p>

      <section className="troubleshooting">
        <h2>Common issues</h2>
        <ul>
          <li>
            <strong>Push rejected / authentication failed:</strong> Use a
            Personal Access Token (PAT) as the password, not your GitHub
            account password. Create one under Settings → Developer settings →
            Personal access tokens (classic) with <strong>repo</strong> scope.
          </li>
          <li>
            <strong>Remote “origin” already exists:</strong> You’ve already added
            a remote. Run <code>git remote -v</code> to see it. To replace it:{' '}
            <code>git remote remove origin</code>, then run{' '}
            <code>git remote add origin YOUR-URL</code> again.
          </li>
          <li>
            <strong>Nothing to commit / no changes:</strong> Make sure you’re
            in the correct folder (<code>pwd</code> or <code>cd</code> to check).
            Run <code>git status</code> to see if anything is staged. If you
            just ran <code>git init</code>, you need <code>git add .</code> first.
          </li>
        </ul>
      </section>

      <section className="checklist">
        <h2>Quick checklist</h2>
        <ul className="checklist-list">
          <li>Logged into GitHub and created a new repo (no README, no .gitignore, no license).</li>
          <li>Copied the repo URL (HTTPS).</li>
          <li>Ran <code>git init</code> in your project folder.</li>
          <li>Ran <code>git add .</code></li>
          <li>Ran <code>git commit -m "Initial commit"</code></li>
          <li>Ran <code>git branch -M main</code></li>
          <li>Ran <code>git remote add origin &lt;your-URL&gt;</code></li>
          <li>Ran <code>git push -u origin main</code></li>
          <li>Refreshed the repo page on GitHub and saw your files.</li>
        </ul>
      </section>
    </div>
  )
}

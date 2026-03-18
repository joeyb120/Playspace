export default function GitHubSetup() {
  return (
    <div className="page-github-setup">
  <h1>GitHub Setup</h1>

  <p className="lead">
    Connect your project folder to GitHub so you can push your code and
    collaborate. Follow these steps in order. You will do some steps in your
    <strong> browser</strong> (on GitHub) and some in the <strong>terminal</strong> (in Cursor).
  </p>

  <section>
    <h2>Part 1: Get ready on GitHub (in your browser)</h2>

    <h3>Step 1: Log in or create a GitHub account</h3>
    <ul>
      <li>
        Go to{" "}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          github.com
        </a>.
      </li>
      <li>
        If you do not have an account, click <strong>Sign up</strong> and
        create one. If your workplace provides one, ask your team which account
        or username to use.
      </li>
      <li>
        If you already have an account, click <strong>Sign in</strong> and log in.
      </li>
    </ul>

    <h3>Step 2: Create a new repository</h3>
    <ul>
      <li>
        Click the <strong>+</strong> in the top right corner and choose{" "}
        <strong>New repository</strong>.
      </li>
      <li>
        <strong>Repository name:</strong> for example <code>my-project</code>,
        or any name you like.
      </li>
      <li>
        <strong>Description:</strong> optional, for example{" "}
        <code>Learning Cursor and web dev</code>.
      </li>
      <li>Choose <strong>Public</strong>.</li>
      <li>
        <strong>Important:</strong> leave all of these <strong>unchecked</strong>:
        <ul>
          <li>❌ Add a README file</li>
          <li>❌ Add .gitignore</li>
          <li>❌ Choose a license</li>
        </ul>
      </li>
      <li>
        Your project folder already has files in it, so you do not want GitHub
        to add anything yet.
      </li>
      <li>
        Click <strong>Create repository</strong>.
      </li>
    </ul>

    <figure className="media-figure">
      <img
        src="/images/github-new-repo.png"
        alt="New repository form with checkboxes unchecked"
        width="640"
        height="360"
      />
      <figcaption>New repository form with checkboxes unchecked</figcaption>
    </figure>

    <h3>Step 3: Copy the repository URL</h3>
    <ul>
      <li>
        On the new repository page, you will see a box called{" "}
        <strong>Quick setup</strong>.
      </li>
      <li>
        Make sure <strong>HTTPS</strong> is selected, not SSH.
      </li>
      <li>
        Copy the URL. It will look like{" "}
        <code>https://github.com/YOUR-USERNAME/your-repo-name.git</code>
      </li>
      <li>Keep this handy. You will use it in Part 2.</li>
    </ul>

    <figure className="media-figure">
      <img
        src="/images/github-quick-setup.png"
        alt="Quick setup box with HTTPS URL"
        width="640"
        height="360"
      />
      <figcaption>Quick setup box with HTTPS URL</figcaption>
    </figure>
  </section>

  <section>
    <h2>Part 2: Connect your folder (in the terminal)</h2>
    <p>
      Complete these steps in <strong>Cursor’s terminal</strong> or any terminal,
      with your project folder as the current directory.
    </p>

    <h3>Step 4: Open the terminal in your project folder</h3>
    <p>
      In Cursor, go to <strong>Terminal &gt; New Terminal</strong> or use{" "}
      <kbd>Ctrl+`</kbd> or <kbd>Cmd+`</kbd>. If you are not already in the
      right folder, run:
    </p>
    <pre><code>cd /path/to/your/project/folder</code></pre>

    <h3>Step 5: Turn this folder into a Git repository</h3>
    <pre><code>git init</code></pre>
    <p>You should see a message that says, “Initialized empty Git repository in …”</p>

    <h3>Step 6: Add all your files</h3>
    <pre><code>git add .</code></pre>
    <p>This stages every file in the folder for your first commit.</p>

    <h3>Step 7: Make the first commit</h3>
    <pre><code>git commit -m "Initial commit"</code></pre>
    <p>You should see a short summary of files created or changed.</p>

    <h3>Step 8: Name the main branch</h3>
    <pre><code>git branch -M main</code></pre>
    <p>
      This names your main branch <code>main</code>, which matches GitHub’s default.
    </p>

    <h3>Step 9: Tell Git where your GitHub repository is</h3>
    <p>Replace <code>YOUR-GITHUB-URL</code> with the URL you copied in Step 3:</p>
    <pre><code>git remote add origin YOUR-GITHUB-URL</code></pre>
    <p>Example:</p>
    <pre><code>git remote add origin https://github.com/yourusername/your-repo.git</code></pre>

    <h3>Step 10: Push your code to GitHub</h3>
    <pre><code>git push -u origin main</code></pre>
    <ul>
      <li>
        If Git asks for a <strong>username</strong>, enter your GitHub username.
      </li>
      <li>
        If it asks for a <strong>password</strong>, use a{" "}
        <strong>Personal Access Token (PAT)</strong>, not your normal GitHub password.
      </li>
      <li>
        To create one, go to GitHub Settings, then Developer settings, then
        Personal access tokens, then Tokens (classic), then Generate new token.
      </li>
      <li>
        Give it a name, check <strong>repo</strong>, generate it, then copy
        the token and paste it when Git asks for a password.
      </li>
    </ul>

    <figure className="media-figure">
      <img
        src="/images/github-terminal-push.png"
        alt="Terminal showing git init through git push"
      />
      <figcaption>Terminal showing git init through git push</figcaption>
    </figure>
    <figure className="media-figure">
      <video
        controls
        width="640"
        height="360"
        poster="/images/video-placeholder.svg"
        preload="metadata"
      >
        <source src="/videos/github-setup.mp4" type="video/mp4" />
        <p>
          Full GitHub setup walkthrough (~3–4 min). Add{" "}
          <code>github-setup.mp4</code> to <code>public/videos/</code> or use a
          Loom/YouTube embed.
        </p>
      </video>
      <figcaption>Video: Full GitHub setup — create repo, run commands, handle PAT (~3–4 min)</figcaption>
    </figure>
  </section>

  <p>
    After this, your folder and GitHub repository are connected. You should see
    your files on the GitHub website.
  </p>

  <section className="troubleshooting">
    <h2>Common issues</h2>
    <ul>
      <li>
        <strong>Push rejected or authentication failed:</strong> Use a Personal
        Access Token (PAT) as the password, not your GitHub account password.
      </li>
      <li>
        <strong>Remote “origin” already exists:</strong> Run{" "}
        <code>git remote -v</code> to see it. To replace it, run{" "}
        <code>git remote remove origin</code>, then{" "}
        <code>git remote add origin YOUR-URL</code> again.
      </li>
      <li>
        <strong>Nothing to commit or no changes:</strong> Make sure you are in
        the correct folder. Run <code>pwd</code> or <code>cd</code> to check,
        then <code>git status</code>. If you just ran <code>git init</code>,
        you need <code>git add .</code> first.
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

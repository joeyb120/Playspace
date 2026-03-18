export default function Workflow() {
  return (
    <div className="page-workflow">
      <h1>Workflow: Cursor + GitHub</h1>

      <p className="lead">
        Use Cursor to write or change code (Chat for questions, Composer for
        edits), then save. When you’re at a good point, commit and push from
        the terminal.
      </p>

      <section>
        <h2>In Cursor</h2>
        <ul>
          <li>
            <strong>Chat</strong> (sidebar): Ask “how do I…”, “what does this
            do?”, “fix this error.” Use it for explanations and quick answers.
          </li>
          <li>
            <strong>Composer</strong> (e.g. <kbd>Cmd+I</kbd> / <kbd>Ctrl+I</kbd>):
            Describe a change you want; it can edit multiple files. Review the
            diff and accept or tweak the suggestions.
          </li>
          <li>
            <strong>Terminal</strong>: The same as your system terminal. Use it
            for <code>git</code>, <code>npm</code>, and other commands.
          </li>
        </ul>
      </section>

      <section>
        <h2>In Git (Cursor’s terminal)</h2>
        <p>When you’re ready to save a snapshot and push to GitHub:</p>
        <pre><code>git status
git add .
git commit -m "Short description of your change"
git push</code></pre>
        <p>
          You can also add specific files instead of <code>git add .</code> if
          you only want to commit some changes.
        </p>
      </section>

      <section className="quick-ref">
        <h2>Quick reference</h2>
        <pre><code>git add .
git commit -m "Your message"
git push</code></pre>
      </section>

      <section>
        <h2>Best practices</h2>
        <ul>
          <li>Commit often with clear, short messages.</li>
          <li>Don’t commit secrets (API keys, passwords) or huge generated files.</li>
          <li>If others use the repo, run <code>git pull</code> before you start
            work so you’re up to date.
          </li>
        </ul>
      </section>
    </div>
  )
}

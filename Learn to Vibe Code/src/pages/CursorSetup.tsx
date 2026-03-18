export default function CursorSetup() {
  return (
    <div className="page-cursor-setup">
      <h1>Cursor Setup</h1>

      <p className="lead">
        Cursor is a code editor with built-in AI (Chat and Composer) so you can
        ask questions and generate code as you work.
      </p>

      <section>
        <h2>Download and install</h2>
        <p>
          Go to <a href="https://cursor.com" target="_blank" rel="noopener noreferrer">cursor.com</a> and
          download Cursor for your system (macOS, Windows, or Linux). Install it
          the same way you would any other app.
        </p>
        <p className="media-placeholder">
          [Screenshot: Cursor welcome / sign-in screen]
        </p>
      </section>

      <section>
        <h2>Sign in</h2>
        <p>
          Open Cursor and sign in or create an account. You can use Google or
          GitHub (or your organization’s preferred method) to sign in.
        </p>
      </section>

      <section>
        <h2>Open your project folder</h2>
        <p>
          Use <strong>File → Open Folder</strong> (or the equivalent shortcut)
          and choose your project folder (e.g. your workspace or a repo you
          cloned). The terminal inside Cursor is the same one you’ll use later
          for Git commands.
        </p>
        <p className="media-placeholder">
          [Screenshot: File → Open Folder, and terminal open in Cursor]
        </p>
        <p className="media-placeholder">
          [Video: Cursor setup walkthrough — open app, sign in, open folder (~2 min)]
        </p>
      </section>

      <p className="note">
        Cursor uses your code to provide suggestions. Don’t open repos or
        folders you’re not allowed to share with the service.
      </p>

      <section className="troubleshooting">
        <h2>Common issues</h2>
        <ul>
          <li>
            <strong>Cursor won’t open:</strong> Restart your computer or
            reinstall from cursor.com. If it still fails, contact your team
            contact with the exact error message.
          </li>
          <li>
            <strong>Sign-in fails or session expired:</strong> Sign out and
            sign back in, or try a different browser for the auth flow. If it
            persists, share the exact message with your team contact.
          </li>
          <li>
            <strong>Can’t find Open Folder:</strong> Look under the
            <strong> File</strong> menu (macOS/Windows) or the application menu.
            If your layout looks different, check Cursor’s documentation for the
            current menu location.
          </li>
        </ul>
      </section>
    </div>
  )
}

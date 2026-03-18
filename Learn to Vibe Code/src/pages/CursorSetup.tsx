export default function CursorSetup() {
  return (
    <div className="page-cursor-setup">
      <h1>Cursor Setup</h1>

      <p className="lead">
      Cursor is a code editor with built in AI tools that help you ask questions, generate code, and make changes as you work.
      </p>

      <p className="note">
        <strong>Need help?</strong> Reach out in the Robots &amp; Pencils Slack channel <code>#ai-webpage-workshop</code> for support.
      </p>

      <section>
        <h2>Step 1: Download and install</h2>
        <p>
          Go to <a href="https://cursor.com" target="_blank" rel="noopener noreferrer">cursor.com</a> and download Cursor for 
          your computer. Choose the version for macOS, Windows, or Linux, then install it like you would any other application.
        </p>
        <figure className="media-figure">
          <img
            src="/images/cursor-sign-in.png"
            alt="Cursor welcome or sign-in screen"
            width="640"
            height="360"
          />
          <figcaption>Cursor welcome / sign-in screen</figcaption>
        </figure>
      </section>

      <section>
        <h2>Step 2: Sign in</h2>
        <p>
        Open Cursor and sign in. If you do not already have an account, you can create one here. Most people sign 
        in with Google or GitHub, but you can also use your organization’s preferred sign in method if needed.
        </p>
      </section>

      <section>
        <h2>Step 3: Open your project folder</h2>
        <p>
        Once you are signed in, open the folder where you want to work.

Select <strong>File</strong>, then <strong>Open Folder</strong>, and choose your project folder. This might be a workspace folder or a repository you already cloned.
        </p>
      </section>

      <section>
        <h2>Step 4: Find the terminal</h2>
        <p>
        Inside Cursor, you will also use the built in terminal for Git 
        commands later on. Once your folder is open, open the terminal so you can get familiar with where it is.</p>
        <figure className="media-figure">
          <img
            src="/images/cursor-open-folder-terminal.png"
            alt="File menu Open Folder and terminal open in Cursor"
            width="640"
            height="360"
          />
          <figcaption>File → Open Folder, and terminal open in Cursor</figcaption>
        </figure>
      </section>

      <p className="note">
      Cursor uses your code to generate suggestions. Only open folders and repositories you are allowed to share with the service.
      </p>

      <section className="troubleshooting">
        <h2>Common issues</h2>
        <ul>
          <li>
            <strong>Cursor will not open:</strong> <br />Restart your computer and try again. If that does not work, reinstall 
            Cursor from cursor.com. If it still fails, send your team contact the exact error message you see.
          </li>
          <li>
            <strong>Sign-in is not working or session expired:</strong> <br /> Sign out and sign back in. You can also try a different browser during the sign in process. 
            If the issue continues, share the exact error message with your team contact.
          </li>
          <li>
            <strong>You cannot find Open Folder:</strong> <br />Look under the <strong>File</strong> menu on macOS or 
            Windows, or under the application menu depending on your setup. If your layout looks 
            different, check Cursor documentation for the most current menu location.
          </li>
        </ul>
      </section>
    </div>
  )
}

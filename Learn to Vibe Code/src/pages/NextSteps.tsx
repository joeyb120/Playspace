import { Link } from 'react-router-dom'

export default function NextSteps() {
  return (
    <div className="page-next-steps">
      <h1>Next Steps</h1>

      <p className="lead">
        You’re ready when Cursor is installed and you’re signed in, your
        project is on GitHub, and you’ve done at least one commit and push.
      </p>

      <section className="checklist">
        <h2>You’re set when:</h2>
        <ul>
          <li>Cursor is installed and you’re signed in.</li>
          <li>Your project is connected to a GitHub repo.</li>
          <li>You’ve run at least one <code>git add</code>, <code>git commit</code>, and{' '}
            <code>git push</code>.
          </li>
        </ul>
      </section>

      <section>
        <h2>If you get stuck</h2>
        <p>
          Contact your team contact and share the exact error or message you see
          (e.g. from the terminal or Cursor). That makes it much easier to
          help.
        </p>
      </section>

      <section>
        <h2>Learn more</h2>
        <ul>
          <li>
            <a href="https://docs.cursor.com" target="_blank" rel="noopener noreferrer">
              Cursor documentation
            </a>
          </li>
          <li>
            <a href="https://docs.github.com" target="_blank" rel="noopener noreferrer">
              GitHub documentation
            </a>
          </li>
        </ul>
      </section>

      <p>
        <Link to="/" className="cta">
          Back to Home
        </Link>
      </p>
    </div>
  )
}

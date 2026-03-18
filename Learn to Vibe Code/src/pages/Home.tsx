import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page-home">
      <h1>Learn to Vibe Code</h1>
      <p className="lead">
        Set up your vibe coding environment with Cursor and GitHub so you can
        build with an AI assistant and keep your work in version control.
      </p>
      <p>
        <strong>Vibe coding</strong> here means working with an AI assistant
        inside Cursor to write and iterate on code, then saving and sharing your
        changes via GitHub. You’ll need a Cursor account and a GitHub account by
        the end of this guide.
      </p>
      <p>
        <Link to="/cursor" className="cta">
          Get started
        </Link>
      </p>
    </div>
  )
}

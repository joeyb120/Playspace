import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page-home">
      <h1>Learn to Vibe Code</h1>
      <p className="lead">
        Start building with Cursor and GitHub, no matter your experience level.
        This short, guided course will help you set up a simple workflow so you
        can create, experiment, and improve with confidence.
      </p>

      <section>
        <h2>What is vibe coding?</h2>
        <p>
          Vibe coding is a more intuitive way to build. You will work
          alongside an AI assistant in Cursor to write and refine code, while
          GitHub keeps track of your changes and progress. It is less about
          getting everything right the first time, and more about learning by
          doing.
        </p>
        <p>
          By the end of this guide, you will have your environment set up,
          understand how the pieces work together, and be ready to start
          building your first project.
        </p>
      </section>

      <p>
        <Link to="/cursor" className="cta">
          Get Started
        </Link>
      </p>
      <p className="home-note">No coding experience required.</p>
    </div>
  )
}

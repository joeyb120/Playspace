import { Outlet, Link, useLocation } from 'react-router-dom'

const ROUTES = [
  { path: '/', label: 'Home' },
  { path: '/cursor', label: 'Cursor Setup' },
  { path: '/github', label: 'GitHub Setup' },
  { path: '/workflow', label: 'Workflow' },
  { path: '/next-steps', label: 'Next Steps' },
] as const

export default function Layout() {
  const location = useLocation()
  const currentIndex = ROUTES.findIndex((r) => r.path === location.pathname)
  const prevRoute = currentIndex > 0 ? ROUTES[currentIndex - 1] : null
  const nextRoute =
    currentIndex >= 0 && currentIndex < ROUTES.length - 1
      ? ROUTES[currentIndex + 1]
      : null

  return (
    <div className="layout">
      <nav className="nav" aria-label="Main">
        <ul>
          {ROUTES.map(({ path, label }) => (
            <li key={path}>
              <Link to={path} className={location.pathname === path ? 'active' : ''}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="main">
        <Outlet />
      </main>
      <footer className="nav-footer">
        {prevRoute && (
          <Link to={prevRoute.path} className="nav-link prev">
            ← {prevRoute.label}
          </Link>
        )}
        <span className="nav-spacer" />
        {nextRoute && (
          <Link to={nextRoute.path} className="nav-link next">
            {nextRoute.label} →
          </Link>
        )}
        <span className="footer-site-label" aria-hidden="true">Learn to Vibe Code</span>
      </footer>
    </div>
  )
}

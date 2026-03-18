import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CursorSetup from './pages/CursorSetup'
import GitHubSetup from './pages/GitHubSetup'
import Workflow from './pages/Workflow'
import NextSteps from './pages/NextSteps'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cursor" element={<CursorSetup />} />
        <Route path="github" element={<GitHubSetup />} />
        <Route path="workflow" element={<Workflow />} />
        <Route path="next-steps" element={<NextSteps />} />
      </Route>
    </Routes>
  )
}

export default App

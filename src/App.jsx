import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/cv'

export default function App() {
  return (
    <div className="">
      {/* <nav className="space-x-4">
        <Link to="/">CV</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

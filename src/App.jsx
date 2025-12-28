import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🎓 Smart Attendance System</h1>
      <p>Welcome to the homepage!</p>
      <nav style={{ margin: '20px 0' }}>
        <Link to="/login" style={{ marginRight: '20px', color: 'blue' }}>Login</Link>
        <Link to="/dashboard" style={{ color: 'blue' }}>Dashboard</Link>
      </nav>
    </div>
  )
}

function Login() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🔐 Login Page</h1>
      <p>This is the login page</p>
      <Link to="/" style={{ color: 'blue' }}>← Back to Home</Link>
    </div>
  )
}

function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>📊 Dashboard</h1>
      <p>This is the dashboard page</p>
      <Link to="/" style={{ color: 'blue' }}>← Back to Home</Link>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
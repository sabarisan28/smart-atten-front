import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div>
      <h1>Smart Attendance System</h1>
      <p>Welcome to the homepage!</p>
      <nav>
        <Link to="/login">Login</Link> | <Link to="/dashboard">Dashboard</Link>
      </nav>
    </div>
  )
}

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <p>This is the login page</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is the dashboard page</p>
      <Link to="/">Back to Home</Link>
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
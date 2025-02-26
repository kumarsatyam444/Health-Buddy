import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <h1>Health Buddy</h1>
        </Link>
        <nav>
          {user && (
            <div className="nav-user-section">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/exercises">Exercises</Link>
              <Link to="/nutrition">Nutrition</Link>
              <div className="user-controls">
                <span className="user-email">{user.email}</span>
                <button onClick={handleClick}>Log out</button>
              </div>
            </div>
          )}
          {!user && (
            <div className="nav-auth-section">
              <Link to="/about">About</Link>
              <Link to="/features">Features</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar

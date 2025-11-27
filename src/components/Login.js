import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="logo">MOVIBES</h1>
        <h2 className="welcome">Welcome back, Olivia</h2>
        <p className="subtitle">Welcome back! Please enter your details.</p>

        <button className="google-login">Log in with Google</button>

        <div className="divider">or</div>

        <form className="login-form">
          <input type="email" placeholder="Email" defaultValue="oliviabrooke3435@gmail.com" />
          <input type="password" placeholder="Password" defaultValue="1234" />

          <div className="options">
            <label className="remember">

              <input type="checkbox" /> Remember me for 30 days
            </label>
            <Link to="/forgot-password" className="forgot">Forgot password</Link>
          </div>

          <button type="submit" className="login-button">Log in</button>
        </form>

        <p className="signup-prompt">
          Don’t have an account? <Link to="/signup">Sign up for free</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
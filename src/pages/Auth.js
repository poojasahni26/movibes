import React from 'react';

const Auth = () => {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Login or Create Account</h2>
      <div className="auth-box">
        <form className="auth-form">
          <input type="email" placeholder="Email" className="auth-input" />
          <input type="password" placeholder="Password" className="auth-input" />
          <button type="submit" className="auth-button">Login</button>
        </form>

        <div className="auth-divider">or</div>

        <form className="auth-form">
          <input type="text" placeholder="Name" className="auth-input" />
          <input type="email" placeholder="Email" className="auth-input" />
          <input type="password" placeholder="Password" className="auth-input" />
          <button type="submit" className="auth-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
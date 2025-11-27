function SignUp() {
  return (
    <div className="auth">
      <h2>Create your account</h2>
      <button>Sign up with Google</button>
      <div>or</div>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
      <p>Already have an account? <a href="/login">Log in</a></p>
    </div>
  );
}

export default SignUp;
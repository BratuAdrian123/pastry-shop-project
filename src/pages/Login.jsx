function Login() {
  return (
    <div className="mr-auto w-fit ml-auto text-center">
      <h1 className="m-5 text-4xl">Login</h1>
      <div className="login-container">
        <div className="m-3">
          <p className="text-2xl">Account</p>
          <input type="text" className="login-input w-[300px] mt-2 text-2xl" />
        </div>
        <div className="m-3">
          <p className="text-2xl">Password</p>
          <input
            type="password"
            className="login-input w-[300px] mt-2 text-2xl"
          />
        </div>
        <button className="text-2xl mb-2 mt-3 sign-in-button">
          <a href="/account">Sign In</a>
        </button>
      </div>

      <div className="mt-16 mb-[20%]">
        <p className="text-xl mb-2">Don't have an account?</p>

        <a href="/register" className="sign-up-button text-2xl">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Login;

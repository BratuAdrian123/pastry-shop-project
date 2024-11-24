function Register() {
  return (
    <div className="mr-auto w-fit ml-auto text-center">
      <h1 className="m-5 text-4xl">Register</h1>
      <div className="login-container">
        <div className="m-3">
          <p className="text-2xl">Account Name</p>
          <input type="text" className="login-input w-[300px] mt-2 text-2xl" />
        </div>
        <div className="m-3">
          <p className="text-2xl">Email</p>
          <input type="email" className="login-input w-[300px] mt-2 text-2xl" />
        </div>
        <div className="m-3">
          <p className="text-2xl">Password</p>
          <input
            type="password"
            className="login-input w-[300px] mt-2 text-2xl"
          />
        </div>
        <div className="m-3">
          <p className="text-2xl">Confirm Password</p>
          <input
            type="password"
            className="login-input w-[300px] mt-2 text-2xl"
          />
        </div>
        <button className="text-2xl mb-2 mt-3 sign-in-button">
          <a href="/login">Sign Up</a>
        </button>
      </div>

      <div className="mt-16 mb-[20%]">
        <p className="text-xl mb-2">Already Registered?</p>

        <a href="/login" className="sign-up-button text-2xl">
          Login In
        </a>
      </div>
    </div>
  );
}

export default Register;

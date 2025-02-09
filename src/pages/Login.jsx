import React from 'react';

const Login = () => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/login-background-image.jpg')" }}
    >
      <div className="bg-white/30 p-8 rounded-lg shadow-lg backdrop-blur-lg w-1/3 mt-8 py-12">
        <p className="text-sm font-semibold text-center text-white mb-4">All artisans are requested to signup and showcase their products as registered users’. For any query, feel free to contact us.</p>
        <form className='mt-12'>
          <div className="mb-4">
            <label className="block text-left text-white font-medium mb-2">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-white/70 text-black focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-white font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded bg-white/70 text-black focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-semibold transition cursor-pointer">
            Login
          </button>
        </form>
        <p className="text-center text-white mt-4">
          Not a member? <a href="#" className="underline font-semibold text-blue-500 hover:text-blue-800">Signup here</a>
        </p>
        <p className="text-center text-white mt-4">
          Forgot Password? <a href="#" className="underline font-semibold text-blue-500 hover:text-blue-800">Click here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

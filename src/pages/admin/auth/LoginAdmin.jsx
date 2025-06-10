import React from 'react';

const LoginAdmin = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="bg-white p-5 rounded shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
        {/* Logo */}
        <div className="text-center mb-4">
          <img src="/logo.png" alt="Logo" style={{ height: '50px' }} />
        </div>

        {/* Heading */}
        <h4 className="fw-bold text-center">Admin Sign In</h4>
        <p className="text-center text-muted mb-4" style={{ fontSize: '0.9rem' }}>
          Sign in to manage and personalize DOT Site
        </p>

        {/* Form */}
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">Username</label>
            <input
              type="email"
              className="form-control"
              id="username"
              placeholder="Rizky3423@gmail.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Fill your password here"
              required
            />
          </div>
          <button type="submit" className="btn w-100 text-white fw-bold" style={{ backgroundColor: '#E31F52' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;

import React from 'react';
import { Link } from "react-router-dom";

export default function LoginThree() {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-4 rounded-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="text-center mb-4">User Login</h3>
                <form className="login-form">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">User Name</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="form-control"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                    <div className="text-center mt-3">
                    <Link to="/forgot-password" className="text-decoration-none">
                        Forgot Password?
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

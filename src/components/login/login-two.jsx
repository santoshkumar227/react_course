import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // important for modal
import './login.css';

export function LoginTwo() {
    return (
        <div className="container mt-5">
            <h2 className="w-100 d-flex justify-content-center align-items-center vh-100">Bootstrap in React</h2>

            {/* Login button */}
            <button
                data-bs-toggle="modal"
                data-bs-target="#login"
                type="button"
                className="btn btn-primary w-100"
            >
                Login
            </button>
            <form className="" method="post">
                {/* Modal */}
                <div className="modal fade" id="login" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">User Login</h4>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>

                            <div className="modal-body">
                                <dl>
                                    <dt>Username:</dt>
                                    <dd><input type="text" className="form-control" name="username" /></dd>

                                    <dt>Password:</dt>
                                    <dd><input type="password" className="form-control" name="password" /></dd>
                                </dl>
                            </div>

                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                                <button type="button" className="btn btn-danger w-100" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

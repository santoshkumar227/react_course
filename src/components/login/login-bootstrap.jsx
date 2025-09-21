import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // important for modal
import './login.css';

export function Loginbootstrap() {
    return (
        <div className="container container-fluid">
            <h2 className="">Bootstrap in React</h2>
            <button className="btn btn-primary">Login</button>
        </div>
    );
}

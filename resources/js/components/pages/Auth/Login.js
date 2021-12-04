import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../api/auth/AuthService";

import "../../assets/css/accueil.css";
import "../../assets/css/login.css";

import Layout from "./../../components/layouts/Layout";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submitForm(event) {
        event.preventDefault();
        if (email !== "" && password !== "") {
            AuthService.login(email, password);
        }
    }

    return (
        <div>
            <Layout>
                <div className="card">
                    <div className="card-title active">Login</div>
                    <div className="card-body">
                        <form onSubmit={submitForm}>
                            <div className="form-group row">
                                <label
                                    htmlFor="email"
                                >
                                    Email :
                                </label>

                                <div className="col-md-6">
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                        autoComplete="email"
                                        autoFocus
                                    />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label
                                    htmlFor="password"
                                >
                                    Password :
                                </label>

                                <div className="col-md-6">
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                        autoComplete="current-password"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-block btn-primary rose"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Login;

import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import contact from "../api/contact";

import "../assets/css/accueil.css";
import "../assets/css/contact.css";

import Layout from "./../components/layouts/Layout";
import contactImg from "../assets/img/contact-img.png";
import { set } from "lodash";
import Swal from "sweetalert2";

function Contact(props) {
    const [firstName, setFirstName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    function submitMessage(event) {
        event.preventDefault();
        document.getElementById("submitButton").disabled = "true";
        document.getElementById("submitButton").innerText = "Chargement...";
        if (
            firstName !== "" &&
            name !== "" &&
            email !== "" &&
            phone !== "" &&
            message !== ""
        ) {
            let data = {
                firstName: firstName,
                name: name,
                email: email,
                phone: phone,
                message: message,
            };
            contact(data)
                .then((response) => {
                    Swal.fire("Email", "Mail envoyé", "success").then(() => {
                        navigate("/");
                    });
                })
                .catch(function (error) {
                    Swal.fire(
                        "Email",
                        "Echec d'envoi de mail. Veuillez bien renseigner les champs",
                        "error"
                    );
                    document.getElementById("submitButton").disabled = "false";
                    document.getElementById("submitButton").innerText =
                        "Envoyer";
                });
        }
    }

    return (
        <div>
            <Layout>
                <div className="header-contact">
                    <img src={contactImg} alt="" />
                    <div style={{ paddingLeft: "2rem", paddingTop: "3rem" }}>
                        <h1>Contact</h1>
                        <div
                            className="bar-white"
                            style={{ margin: "1rem 0" }}
                        ></div>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="wrapper">
                        <div className="c-left">
                            <h2>Ecrivez nous</h2>
                            <form action="" onSubmit={submitMessage}>
                                <div className="input-box">
                                    <div>
                                        <label htmlFor="name">Nom</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value);
                                            }}
                                            id="name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="firstName">
                                            Prénom
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={firstName}
                                            onChange={(e) => {
                                                setFirstName(e.target.value);
                                            }}
                                            id="firstName"
                                        />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                            id="email"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={phone}
                                            onChange={(e) => {
                                                setPhone(e.target.value);
                                            }}
                                            id="phone"
                                        />
                                    </div>
                                </div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    value={message}
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                    }}
                                    id="message"
                                    cols="30"
                                    rows="10"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="btn blue"
                                    id="submitButton"
                                >
                                    Envoyer
                                </button>
                            </form>
                        </div>
                        <div className="c-right">
                            <h2>Information</h2>
                            <br />
                            <h4>Sieges</h4>
                            <div className="pan">
                                <span>95815 Sacramento, USA</span>
                                <br />
                                <br />
                                <strong>TEL</strong>: (1) 916 837 1586 <br />
                                <strong>FAX</strong>: (1) 916 837 1586
                            </div>
                            <div className="pan">
                                <p>womenbefree@gmail.com</p>
                                <p>https://womenbefree.org</p>
                            </div>
                            <div className="pan">
                                <h4>Numéros Mobile Money</h4>
                                <p>229 61640292</p>
                                <h4>Références bancaires</h4>
                                <p>00 37195560592</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Contact;

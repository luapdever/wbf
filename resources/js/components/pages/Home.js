import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../assets/css/accueil.css";

import WbfHelpers from "../helpers";
import Layout from "./../components/layouts/Layout";
import wezon from "../assets/img/header-img.png";
import headerSub from "../assets/img/header-sub-image.png";
import valeur1 from "../assets/img/valeurs-1.png";
import valeur2 from "../assets/img/valeurs-2.png";
import valeur3 from "../assets/img/valeurs-3.png";
import fetchArticles from "../api/fetchArticles";
import AuthService from "../api/auth/AuthService";

function Home(props) {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticles()
            .then((response) => {
                setArticles(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    let i = 0;
    const get4Articles = articles.map((blog) => {
        if (!blog.project && i < 4) {
            i++;
            return (
                <div key={blog.id} className="a-article">
                    <img src={blog.image} alt={blog.title} />
                    <div className="article-content">
                        <h4>{blog.title}</h4>
                        <p style={{ fontSize: "16px" }}>
                            {WbfHelpers.smallDescription(blog.content)}
                        </p>
                        <Link
                            to={"/article/" + blog.id}
                            className="btn blue"
                            style={{
                                padding: "8px 5px",
                                fontSize: "14px",
                                fontWeight: "400",
                            }}
                        >
                            Lire plus +
                        </Link>
                    </div>
                </div>
            );
        }
    });

    let j = 0;
    const get4Projects = articles.map((project) => {
        if (project.project && j < 4) {
            j++;
            return (
                <div key={project.id} className="a-project">
                    <img src={project.image} alt={project.title} />
                    <div className="project-content">
                        <h4>{project.title}</h4>
                        <p style={{ fontSize: "16px" }}>
                            {WbfHelpers.smallDescription(project.content)}
                        </p>
                        <Link
                            to={"/article/" + project.id}
                            className="btn rose"
                            style={{
                                padding: "8px 5px",
                                fontSize: "14px",
                                fontWeight: "400",
                            }}
                        >
                            Lire plus +
                        </Link>
                    </div>
                </div>
            );
        }
    });

    let showAddButton = () => {
        if (AuthService.logged()) {
            return (
                <div className="fixed">
                    <Link to="/article/add-article" className="button">
                        <div className="buttonDiv bg-b-blue">
                            Ajouter un article
                        </div>
                    </Link>
                </div>
            );
        } else {
            return (
                <div className="fixed">
                    <Link to="/login" className="button">
                        <div className="buttonDiv bg-b-blue">
                            Login
                        </div>
                    </Link>
                </div>
            )
        }
    };

    return (
        <div>
            <Layout>
                <div className="fake-slider">
                    <img src={wezon} />
                    <div className="wezon-text">WEZON</div>
                    <div className="cta-btn">
                        <div className="btn rose giveaway">
                            Faire un don
                        </div>
                        <Link to="/contact" className="btn blue joinus">
                            Rejoignez nous
                        </Link>
                    </div>
                </div>

                <div className="whoweare">
                    <div className="wwa-text-img">
                        <img src={headerSub} alt="" />
                        <div className="wwa-text">
                            <div>
                                <h1>Qui sommes nous?</h1>
                                <div
                                    className="bar-rose"
                                    style={{ margin: "10px 0" }}
                                ></div>
                                <h2>Women Be Free</h2>
                                La Women Be Free est une organisation
                                humanitaire fondée en 2021 qui s’occupe de
                                la protection des enfants, des filles et des
                                femmes, en vcollaboration avec les
                                Technologies de l’Information et de la
                                Communication liées à la santé et au
                                bien-être de tous.
                            </div>
                        </div>
                    </div>
                    <div className="ourmission">
                        <h2>Notre mission</h2>
                        <p>
                            Promouvoir les Technologies de l'Information et
                            de la Communication, la santé et contribuer au
                            bien-être des jeunes, des filles et des femmes
                        </p>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="ourvalues">
                        <div className="left">
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "2rem",
                                }}
                            >
                                <h1 style={{ marginRight: "2rem" }}>
                                    NOS VALEURS
                                </h1>
                                <div className="bar-rose"></div>
                            </div>
                            <div className="aValue">
                                <div className="square"></div>
                                <div className="value-text">
                                    <h2>Fraternité</h2>
                                    <p>
                                        Agir de manière à rapprocher l’homme
                                        de sa nature première qu’est la
                                        fraternité pour un monde fort.
                                    </p>
                                </div>
                            </div>
                            <div className="aValue">
                                <div
                                    className="square"
                                    style={{ backgroundColor: "#ffd166" }}
                                ></div>
                                <div className="value-text">
                                    <h2>Solidarité</h2>
                                    <p>
                                        Faire de l’entraide un maître-mot,
                                        une réalité en symbiose avec notre
                                        humanisme.
                                    </p>
                                </div>
                            </div>
                            <div className="aValue">
                                <div
                                    className="square"
                                    style={{ backgroundColor: "#118ab2" }}
                                ></div>
                                <div className="value-text">
                                    <h2>Compassion</h2>
                                    <p>
                                        Rester convaincu que de sa propre et
                                        pleine joie dépend celle de l’autre
                                        et en faire le combat quotidien de
                                        chaque âme qui vit.
                                    </p>
                                </div>
                            </div>
                            <div className="aValue">
                                <div
                                    className="square"
                                    style={{ backgroundColor: "#06d6a0" }}
                                ></div>
                                <div className="value-text">
                                    <h2>Justice</h2>
                                    <p>
                                        Essayer de contribuer à offrir à
                                        chacun et à tous, ce qu’il mérite
                                        pour bâtir un monde meilleur.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="value-img-box">
                                <img src={valeur1} alt="" />
                                <span>
                                    Une bonne hygiène de vie est un
                                    préalable et au enjeu majeur au
                                    développement de la société 
                                </span>
                            </div>
                            <div className="value-img-box">
                                <img src={valeur2} alt="" />
                                <span>
                                    L’éducation est la principale composante
                                    de toute réponse humanitaire 
                                </span>
                            </div>
                            <div className="value-img-box">
                                <img src={valeur3} alt="" />
                                <span>
                                    Nous sommes engagés parce que beaucoup
                                    sont encore privés de leurs droits
                                    fondamentaux
                                </span>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
                <div className="wrap-project">
                    <div className="wrapper">
                        <div className="projects">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <h1 style={{ marginRight: "2rem" }}>
                                        Nos projets
                                    </h1>
                                    <div className="bar-rose"></div>
                                </div>
                                <Link to={"/project"} className="btn rose">
                                    Voir plus +
                                </Link>
                            </div>

                            <br />
                            <div className="project-list">
                                {get4Projects}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrap-article">
                    <div className="wrapper">
                        <div className="articles">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <h1 style={{ marginRight: "2rem" }}>
                                        Nos récents articles
                                    </h1>
                                    <div className="bar-blue"></div>
                                </div>
                                <Link to={"/blog"} className="btn blue">
                                    Voir plus +
                                </Link>
                            </div>

                            <br />
                            <div className="article-list">
                                {get4Articles}
                            </div>
                        </div>
                    </div>
                </div>
                {showAddButton()}
            </Layout>
        </div>
    );
}


export default Home;

import { add } from "lodash";
import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import addArticle from "../api/addArticle";

import "../assets/css/accueil.css";
import "../assets/css/add-article.css";

import Layout from "./../components/layouts/Layout";

function AddArticle(props) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState();
    const [content, setContent] = useState("");
    const [resources, setResources] = useState([]);
    const [tags, setTags] = useState("");
    const [project, setProject] = useState("");
    const navigate = useNavigate();

    function submitForm(event) {
        event.preventDefault();
        document.getElementById("submitButton").disabled = "true";
        document.getElementById("submitButton").innerText = "Chargement...";
        if (title !== "" && image !== undefined && content !== "") {
            let tag_list = tags.split("#");
            tag_list.shift();

            let data = new FormData();
            data.append("title", title);
            data.append("image", image);
            data.append("content", content);
            data.append("tags", tags);
            data.append("resources", resources);
            data.append("project", project);

            addArticle(data)
                .then((response) => {
                    Swal.fire("Article", "Article ajouté", "success").then(
                        () => {
                            navigate("/article/" + response.data.data.id);
                        }
                    );
                })
                .catch(function (error) {
                    Swal.fire("Article", "Echec d'ajout d'article", "error");
                    document.getElementById("submitButton").disabled = "false";
                    document.getElementById("submitButton").innerText =
                        "Poster";
                });
        }
    }

    return (
        <div>
            <Layout>
                <div className="add-article">
                    <div className="add-form">
                        <h1>Ajouter un article</h1>
                        <form
                            onSubmit={submitForm}
                            encType="multipart/form-data"
                        >
                            <div className="title-banner">
                                <input
                                    type="text"
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    id=""
                                    placeholder="Titre de l'article"
                                />
                                <input
                                    type="file"
                                    name="image"
                                    onChange={(e) =>
                                        setImage(e.target.files[0])
                                    }
                                    id="files"
                                    className="inputfile"
                                    placeholder="Ajouter une image bannière"
                                />
                                <label
                                    htmlFor="files"
                                    style={{ backgroundColor: "#555" }}
                                >
                                    Choisir image bannière
                                </label>
                            </div>
                            <textarea
                                name="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                id=""
                                cols="30"
                                rows="10"
                            ></textarea>
                            <div className="tags-multiple-files">
                                <input
                                    type="text"
                                    name="tags"
                                    value={tags}
                                    onChange={(e) => setTags(e.target.value)}
                                    id=""
                                    placeholder="Tags"
                                />
                                <input
                                    type="file"
                                    className="inputfile"
                                    name="resources"
                                    onChange={(e) =>
                                        setResources(e.target.files)
                                    }
                                    multiple
                                    id="mlfile"
                                />
                                <label htmlFor="mlfile">
                                    Inclure des fichiers
                                </label>
                            </div>
                            <div className="is-project">
                                <label htmlFor="project">
                                    Poster en tant que projet
                                </label>
                                <input
                                    type="checkbox"
                                    name="project"
                                    value={project}
                                    onChange={(e) =>
                                        setProject(e.target.checked)
                                    }
                                    id="project"
                                />
                            </div>
                            <div className="send">
                                <div
                                    className="bar-rose"
                                    style={{ backgroundColor: "transparent" }}
                                ></div>
                                <button
                                    type="submit"
                                    className="btn rose"
                                    id="submitButton"
                                >
                                    Poster
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default AddArticle;

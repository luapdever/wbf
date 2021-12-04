import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userAvatar from "../assets/favicon.png";
import "../assets/css/one-article.css";
import "../assets/css/accueil.css";

import Layout from "../components/layouts/Layout";
import fetchArticle from "../api/fetchArticle";
import fetchComments from "../api/fetchComments";
import commentPost from "../api/commentPost";

function BlogDetails(props) {
    let arrSplit = window.location.pathname.split("/");
    let id = arrSplit[arrSplit.length - 1];

    const [pageId, setPageId] = useState(id);
    const [comments, setComments] = useState([]);
    const [totalComments, setTotalComments] = useState(0);
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [article, setArticle] = useState([]);

    useEffect(() => {
        fetchArticle(pageId)
            .then((response) => {
                setArticle(response.data.data);
                fetchComments(response.data.data.id)
                    .then((res) => {
                        setComments(res.data.data);
                        setTotalComments(res.data.meta.total);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const submitComment = (event) => {
        event.preventDefault();
        if (email !== "" && content !== "") {
            let data = {
                email: email,
                content: content,
            };
            commentPost(pageId, data)
                .then((response) => {
                    fetchComments(pageId)
                        .then((res) => {
                            setComments(res.data.data);
                            setTotalComments(res.data.meta.total);
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }


    return (
        <div>
            <Layout>
                <div className="blog-header">
                    <img src={article.image} alt={article.title} />
                    <h2>{article.title}</h2>
                </div>

                <div className="wrapper">
                    <div className="post-info">
                        <div className="writter-info">
                            <img src={userAvatar} alt="" />
                            <div className="wroteby">
                                <p>
                                    Ecrit par <br />
                                    {article.owner_name}
                                </p>
                            </div>
                        </div>
                        <div className="written-at">
                            Posté {article.created_at}
                        </div>
                    </div>
                    <div className="article-text">{article.content}</div>
                </div>
                <div className="makecomment">
                    <div className="wrapper">
                        <h3>Poster un commentaire</h3>
                        <form action="" onSubmit={submitComment}>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Votre adresse e-mail"
                                value={email}
                                onChange={onChangeEmail}
                            />
                            <textarea
                                name="content"
                                id="content"
                                placeholder="Votre commentaire..."
                                value={content}
                                onChange={onChangeContent}
                            ></textarea>
                            <button type="submit" className="btn blue">
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
                <div className="allcomments">
                    <div className="wrapper">
                        <h3>Commentaires ({totalComments})</h3>
                        {
                            comments.map((comment) => {
                                return (
                                    <div key={comment.id} className="a-comment">
                                        <div className="comment-info">
                                            <div>#{comment.email}</div>
                                            <div>{comment.created_at}</div>
                                        </div>
                                        <div className="comment-text">{comment.content}</div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default BlogDetails;

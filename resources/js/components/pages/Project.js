import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "../assets/css/accueil.css";
import "../assets/css/projets.css";

import WbfHelpers from "../helpers";
import Layout from "./../components/layouts/Layout";
import fetchArticles from "../api/fetchArticles";
import project1 from "../assets/img/project-1.png";
import head from "../assets/img/blog-head.png";

function Project(props) {
	const [numPage, setNumPage] = useState(1);
	const [lastPage, setLastPage] = useState(0);
	const [hasMore, setHasMore] = useState(false);
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		getArticles();
		setHasMore(true);
	}, []);

	function getArticles() {
		fetchArticles(numPage, true)
			.then((response) => {
				setProjects(projects.concat(response.data.data));
				if(numPage === 1) {
					setLastPage(response.data.meta.last_page)
				}
			})
			.catch(function (error) {
				console.log(error);
			});

			setNumPage(numPage + 1);
			if(numPage > lastPage) {
				setHasMore(false);
			}
	}

	return (
		<div>
			<Layout>
				<div className="xblog-header">
					<div className="xblog-head-text">
						<div>
							<h2>Nos projets</h2>
							<div
								className="bar-rose"
								style={{ margin: "0.5rem 0 2rem 0" }}
							></div>
							<p>
								Nos actions s’articulent autour de
								stratégies innovantes liées à la lutte
								contre la pauvreté et les inégalités
								sociales pour toucher et transformer des
								vies dans le sens de la création de
								communautés plus épanouies. Nous agissons
								sur les principaux domaines à savoir :
								l’éducation et la protection de l’enfance ;
								l’autonomisation de la femme,
								l’environnement, l’hygiène et
								l’assainissement de base, l’accès à l’eau et
								la sécurité alimentaire. Découvrez nos
								projets et programmes pour agir contre les
								inégalités :
							</p>
						</div>
					</div>
					<img src={head} alt="" />
				</div>

				<div className="wrap-blog-article">
					<div className="wrapper">
						<div className="xblog-articles">
							<div className="">
								<InfiniteScroll
									className="xblog-article-list"
									dataLength={projects.length}
									next={getArticles}
									hasMore={hasMore}
									loader={<h4>Loading...</h4>}
									style={{overflow: 'initial'}}
								>
									{
										projects.map((project) => {
											if (project.project) {
												return (
													<div key={project.id} className="xa-blog-article">
														<img src={project.image} alt={project.title} />
														<div className="xblog-article-content">
															<h4>{project.title}</h4>
															<p style={{ fontSize: "16px" }}>
																{WbfHelpers.smallDescription(project.content)}
															</p>
															<Link
																to={"/article/" + project.id}
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
										})
									}
								</InfiniteScroll>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default Project;

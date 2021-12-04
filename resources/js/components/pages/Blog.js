import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "../assets/css/accueil.css";
import "../assets/css/blog.css";

import WbfHelpers from "../helpers";
import Layout from "./../components/layouts/Layout";
import fetchArticles from "../api/fetchArticles";
import project1 from "../assets/img/project-1.png";
import head from "../assets/img/blog-head.png";

function Blog(props) {
  const [numPage, setNumPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getArticles();
    setHasMore(true);
  }, []);

  function getArticles() {
    fetchArticles(numPage, false)
      .then((response) => {
        setBlogs(blogs.concat(response.data.data));
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
        <div className="blog-header">
          <div className="blog-head-text">
            <div>
              <h1>Blog</h1>
              <div
                  className="bar-rose"
                  style={{ margin: "1rem 0px" }}
              ></div>
            </div>
          </div>
          <img src={head} alt="" />
        </div>

        <div className="wrap-blog-article">
          <div className="wrapper">
            <div className="blog-articles">
              <div className="">
                <InfiniteScroll
                  className="blog-article-list"
                  dataLength={blogs.length}
                  next={getArticles}
                  hasMore={hasMore}
                  loader={<h4>Loading...</h4>}
                >
                  {
                    blogs.map((blog) => {
                      if (!blog.project) {
                        return (
                          <div key={blog.id} className="a-blog-article">
                            <img src={blog.image} alt={blog.title} />
                            <div className="blog-article-content">
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

export default Blog;

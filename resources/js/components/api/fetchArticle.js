function fetchArticle(id) {
    return axios.get("/api/articles/" + id);
}

export default fetchArticle;

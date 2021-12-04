function fetchArticles(numPage = 1, isProject) {
    return axios.get("/api/articles?page=" + numPage + (isProject ? "&isProject=" + isProject : ""));
}

export default fetchArticles;

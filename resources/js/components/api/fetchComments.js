function fetchComments(id) {
    return axios.get("/api/articles/" + id + "/comments");
}

export default fetchComments;

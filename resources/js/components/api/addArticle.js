import authHeader from "./auth/authHeader";

function addArticle(data) {
    let token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");

    return axios.post("/api/articles", data, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-CSRF-TOKEN": token,
            Authorization: authHeader().Authorization,
        },
    });
}

export default addArticle;

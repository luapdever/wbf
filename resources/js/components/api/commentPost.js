function commentPost(id, data) {
    let token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");

    return axios.post("/api/articles/" + id + "/comments", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text-plain, */*",
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-TOKEN": token,
        },
        email: data.email,
        content: data.content,
    });
}

export default commentPost;

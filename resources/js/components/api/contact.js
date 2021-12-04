function contact(data) {
    let token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");

    return axios.post("/api/contact", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text-plain, */*",
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-TOKEN": token,
        },
        firstName: data.firstName,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
    });
}

export default contact;

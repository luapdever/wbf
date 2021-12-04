import Swal from "sweetalert2";

const API_URL = "/api/auth/";

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + "login", {
                email: email,
                password: password,
            })
            .then((response) => {
                if (response.data.access_token) {
                    sessionStorage.setItem("user", JSON.stringify(response.data));
                }

                Swal.fire("Login", "Connexion réussie", "success").then(
                    (result) => {
                        window.location.reload();
                    }
                );
            })
            .catch(function (error) {
                Swal.fire("Login", "Email ou mot de passe incorrect", "error");
            });
    }

    logged() {
        const user = JSON.parse(sessionStorage.getItem("user"));

        if (user && user.access_token) {
            return true;
        } else {
            return false;
        }
    }

    logout() {
        sessionStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(API_URL + "register", {
            username,
            email,
            password,
        });
    }
}

export default new AuthService();

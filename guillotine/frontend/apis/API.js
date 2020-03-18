import axios from "axios"

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default class API {
    getCurrentUser() {
        return axios.get("/api/current-user")
            .then(response => response.data)
            .catch(error => console.log(error));
    }
}
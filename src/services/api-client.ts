import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params :
    {
        key : "f4d28094b6a14121ac4317956c719480"
    }
})
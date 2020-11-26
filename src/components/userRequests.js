import axios from 'axios';

const instance = axios.create({
    baseURL: "https://fastshop-server.herokuapp.com/"
})

instance.interceptors.request.use((req) => {
    const token = localStorage.getItem('token')

    req.headers.authorization = `Berear ${token}`;
    return req
});

const refreshToken = localStorage.getItem("refreshToken");
instance.interceptors.response.use(async (res) => {
    if (res.data.message === "TokenExpired") {
        const response = await axios.get("https://fastshop-server.herokuapp.com/token", {
            headers: {
                authorization: `Bearer ${refreshToken}`
            }
        });
        console.log(response.data.token)
        localStorage.setItem("token", response.data.token)
        const newRes = instance.post(res.config.url,)
        return newRes;
    }
    return res
}, err => {
    console.log(err.response)
    return err
})
export default instance

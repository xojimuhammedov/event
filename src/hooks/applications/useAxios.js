import axios from 'axios';
import React, { useEffect, useState } from 'react'
// axios.defaults.baseURL = "https://admin.lupinevent.com/api/applications?populate=*";
const useAxios = () => {
    const [res, setRes] = useState([]);
    const [error, setError] = useState("");
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        return async () => {
            try {
                const res = await axios.get("https://admin.lupinevent.com/api/applications?populate=*");
                setRes(res.data.data);
            } catch (err) {
                setError(err.massage)
            } finally {
                setLoader(false)
            }
        }
    }, [])
    return { res, error, loader }
}
export default useAxios;
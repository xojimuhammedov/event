import axios from "axios";
import React, { useEffect, useState } from "react";
const useAxios = () => {
  const [resAbout, setResAbout] = useState([]);
  const [errorAbout, setErrorAbout] = useState("");
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    return async () => {
      try {
        const res = await axios.get(
          "https://admin.lupinevent.com/api/about-uses?populate=*"
        );
        setResAbout(res.data.data);
      } catch (err) {
        setErrorAbout(err.massage);
      } finally {
        setLoader(false);
      }
    };
  }, []);
  return { resAbout, errorAbout, loader };
};
export default useAxios;

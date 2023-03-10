import React, { useContext } from "react";
import { RegisterContext } from "../Context/Context";
import { MDBFile } from "mdb-react-ui-kit";
const Img = () => {
  const { registerInfo, setRegisterInfo } = useContext(RegisterContext);
  const processFile = async (e) => {
    const CLOUD_NAME = "dvgnuchjw";
    const UNSIGNED_UPLOAD_PRESET = "ym3yv62c";
    const FETCH_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`;

    const files = document.querySelector("[type=file]").files;

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      var DATA = new FormData();

      DATA.append("file", file);
      DATA.append("cloud_name", CLOUD_NAME);
      DATA.append("upload_preset", UNSIGNED_UPLOAD_PRESET);

      let res = await fetch(FETCH_URL, {
        method: "post",
        mode: "cors",
        body: DATA,
      });

      let json = await res.json();

      setRegisterInfo({ ...registerInfo, img: json.url });
    }
  };

  return (
    <MDBFile label="Profile Picture" onChange={processFile} id="customFile" />
  );
};

export default Img;

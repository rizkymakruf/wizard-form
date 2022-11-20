import Image from "next/image";
import React, { useEffect, useState } from "react";

const FormFoto = ({ formData, setFormData }) => {
  const { useState } = React;
  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);

  useEffect(() => {
    setCheckFile(true);
  }, []);

  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
  };

  const imagesubmission = () => {
    if (checkFile) {
      //   alert("File Uploaded");
      setFormData({ ...formData, fotoKTP: selectedFile });
      console.log("dat", formData.fotoKTP);
      console.log(selectedFile);
      setCheckFile(true);
    } else {
      alert("select a file");
    }
  };

  const dat = formData.fotoKTP;

  return (
    <>
      <div className="w-full relative grid gap-2 p-5">
        <div className="w-full h-36 cursor-pointer relative flex justify-center items-center border-2 rounded-md bg-gray-200">
          <input
            type="file"
            name="file"
            onChange={imageHandler}
            className="absolute z-30 opacity-0 cursor-pointer full w-full"
          />
          <div className="absolute w-full  z-10 flex justify-center items-center gap-2">
            <img
              className={`h-36 w-full rounded-md ${
                dat === "" ? "opacity-0" : "opacity-1"
              }`}
              src={dat ? URL.createObjectURL(dat) : null}
            />
          </div>
        </div>
        <span
          className={`text-[10px] w-56 ${
            dat ? "text-green-500" : "text-gray-500"
          } truncate`}
        >
          {dat ? dat.name : "choose a file"}
        </span>
        <button
          onClick={imagesubmission}
          className="w-full h-8 bg-green-600 text-white text-[12px] rounded-md flex items-center justify-center gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-white"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.03 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v4.94a.75.75 0 001.5 0v-4.94l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
              clipRule="evenodd"
            />
          </svg>
          Klik to Upload KTP
        </button>
      </div>
    </>
  );
};
export default FormFoto;

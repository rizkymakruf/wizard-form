import Image from "next/image";
import React, { useEffect, useState } from "react";

const FormFoto = ({ formData, setFormData }) => {
  const { useState } = React;
  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);

  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
  };

  const imagesubmission = () => {
    if (checkFile) {
      alert("File Uploaded");
      console.log(selectedFile);
    } else {
      alert("select a file");
    }
  };

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
                checkFile ? "opacity-1" : "opacity-0"
              }`}
              src={selectedFile ? URL.createObjectURL(selectedFile) : null}
            />
          </div>
        </div>
        <button
          onClick={imagesubmission}
          className="w-full h-8 bg-green-600 text-white rounded-md"
        >
          Upload
        </button>
      </div>
    </>
  );
};
export default FormFoto;

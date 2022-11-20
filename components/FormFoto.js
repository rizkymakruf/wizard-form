import React, { useEffect, useState } from "react";

const FormFoto = ({ formData, setFormData }) => {
  const { useState } = React;
  const [files, setFile] = useState([]);
  const [message, setMessage] = useState();
  const handleFile = (e) => {
    setMessage("");
    let file = e.target.files;

    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, file[i]]);
      } else {
        setMessage("only images accepted");
      }
    }
  };
  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i));
  };

  useEffect(() => {
    setFormData({ ...formData, foto: files });
  }, []);
  console.log("fff", files);

  return (
    <>
      <div className="p-3 md:w-1/2 w-[360px] bg-white rounded-md">
        <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
          {message}
        </span>
        <div className="h-24 w-full relative border-2 items-center rounded-md cursor-pointer bg-gray-300 border-gray-400 border-dotted">
          <input
            type="file"
            onChange={handleFile}
            className="h-full w-full bg-green-200 opacity-0 z-10 absolute"
            multiple="multiple"
            name="files[]"
            // value={formData.foto}
          />
          <div className="h-full w-full bg-gray-200 absolute z-1 flex justify-center items-center top-0">
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span className="text-[12px] text-gray-800">{`Drag and Drop a file`}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 mt-2">
          {files.map((file, key) => {
            return (
              <div key={key} className="overflow-hidden relative">
                <button
                  className="absolute top-1 right-1 text-white"
                  onClick={() => {
                    removeImage(file.name);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-red-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                <img
                  className="h-32 w-full rounded-md"
                  src={URL.createObjectURL(file)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default FormFoto;

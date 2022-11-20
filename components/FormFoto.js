import React, { useEffect, useState } from "react";

const FormFoto = ({ formData, setFormData }) => {
  const { useState } = React;
  //   set foto KTP
  const [selectedFileKtp, setSelectedFileKtp] = useState();
  const [checkFileKtp, setCheckFileKtp] = useState(false);
  //   set foto selfie
  const [selectedFileSelfie, setSelectedFileSelfie] = useState();
  const [checkFileSelfie, setCheckFileSelfie] = useState(false);
  //   set foto bebas
  const [selectedFileBebas, setSelectedFileBebas] = useState();
  const [checkFileBebas, setCheckFileBebas] = useState(false);

  useEffect(() => {
    setCheckFileKtp(true);
    setCheckFileSelfie(true);
    setCheckFileBebas(true);
  }, []);
  //   ktp
  const imageKtpHandler = (e) => {
    setSelectedFileKtp(e.target.files[0]);
    setCheckFileKtp(true);
  };
  const imagesubmissionKtp = () => {
    if (checkFileKtp) {
      setFormData({ ...formData, fotoKTP: selectedFileKtp });
      console.log("dat", formData.fotoKTP);
      console.log(selectedFileKtp);
      setCheckFileKtp(true);
    } else {
      alert("select foto KTP !");
    }
  };
  //   selfie
  const imageSelfieHandler = (e) => {
    setSelectedFileSelfie(e.target.files[0]);
    setCheckFileSelfie(true);
  };
  const imagesubmissionSelfie = () => {
    if (checkFileSelfie) {
      setFormData({ ...formData, fotoSelfie: selectedFileSelfie });
      console.log("dat", formData.fotoSelfie);
      console.log(selectedFileSelfie);
      setCheckFileSelfie(true);
    } else {
      alert("select foto selfie !");
    }
  };
  //   bebas
  const imageBebasHandler = (e) => {
    setSelectedFileBebas(e.target.files[0]);
    setCheckFileBebas(true);
  };
  const imagesubmissionBebas = () => {
    if (checkFileBebas) {
      setFormData({ ...formData, fotoBebas: selectedFileBebas });
      console.log("dat", formData.fotoBebas);
      console.log(selectedFileBebas);
      setCheckFileBebas(true);
    } else {
      alert("select foto bebas !");
    }
  };

  //   decla
  const ktp = formData.fotoKTP;
  const selfie = formData.fotoSelfie;
  const bebas = formData.fotoBebas;

  return (
    <div className="w-full flex flex-col space-y-3">
      <div className="w-full relative grid gap-2 px-5">
        <div className="w-full h-36 cursor-pointer relative flex justify-center items-center border-2 rounded-md bg-gray-200">
          <input
            type="file"
            name="file"
            onChange={imageKtpHandler}
            className="absolute z-30 opacity-0 cursor-pointer full w-full"
          />
          <div className="absolute w-full  z-10 flex justify-center items-center gap-2">
            <img
              className={`h-36 w-full rounded-md ${
                ktp === "" ? "opacity-0" : "opacity-1"
              }`}
              src={ktp ? URL.createObjectURL(ktp) : null}
            />
          </div>
        </div>
        <span
          className={`text-[10px] w-56 ${
            ktp ? "text-green-500" : "text-gray-500"
          } truncate`}
        >
          {ktp ? ktp.name : "choose a file"}
        </span>
        <button
          onClick={imagesubmissionKtp}
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
      <div className="w-full relative grid gap-2 px-5">
        <div className="w-full h-36 cursor-pointer relative flex justify-center items-center border-2 rounded-md bg-gray-200">
          <input
            type="file"
            name="file"
            onChange={imageSelfieHandler}
            className="absolute z-30 opacity-0 cursor-pointer full w-full"
          />
          <div className="absolute w-full  z-10 flex justify-center items-center gap-2">
            <img
              className={`h-36 w-full rounded-md ${
                selfie === "" ? "opacity-0" : "opacity-1"
              }`}
              src={selfie ? URL.createObjectURL(selfie) : null}
            />
          </div>
        </div>
        <span
          className={`text-[10px] w-56 ${
            selfie ? "text-green-500" : "text-gray-500"
          } truncate`}
        >
          {selfie ? selfie.name : "choose a file"}
        </span>
        <button
          onClick={imagesubmissionSelfie}
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
          Klik to Upload Selfie
        </button>
      </div>
      <div className="w-full relative grid gap-2 px-5">
        <div className="w-full h-36 cursor-pointer relative flex justify-center items-center border-2 rounded-md bg-gray-200">
          <input
            type="file"
            name="file"
            onChange={imageBebasHandler}
            className="absolute z-30 opacity-0 cursor-pointer full w-full"
          />
          <div className="absolute w-full  z-10 flex justify-center items-center gap-2">
            <img
              className={`h-36 w-full rounded-md ${
                bebas === "" ? "opacity-0" : "opacity-1"
              }`}
              src={bebas ? URL.createObjectURL(bebas) : null}
            />
          </div>
        </div>
        <span
          className={`text-[10px] w-56 ${
            bebas ? "text-green-500" : "text-gray-500"
          } truncate`}
        >
          {bebas ? bebas.name : "choose a file"}
        </span>
        <button
          onClick={imagesubmissionBebas}
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
          Klik to Upload Bebas
        </button>
      </div>
    </div>
  );
};
export default FormFoto;

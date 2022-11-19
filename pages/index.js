import { parse } from "postcss";
import { useEffect, useState } from "react";
import { StyleRegistry } from "styled-jsx";
import FormFoto from "../components/FormFoto";
import FormulirKlaim from "../components/FormulirKlaim";
import Navigasi from "../components/navigasi";
import Review from "../components/Review";
import axios from "axios";

const Home = (props) => {
  // fetch data provinces
  const { provinces, regencies } = props;
  // set page
  const [page, setPage] = useState(0);

  // set data from form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    biodata: "",
    province: "",
    regencies: "",
  });

  const [id, setId] = useState();
  const [link, setLink] = useState("");
  const proId = formData.province;
  useEffect(() => {
    setId(`${proId === "" ? "11" : formData.province}`);
    setLink(
      `https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${id}.json`
    );
  }, [props]);
  console.log("link", link);
  console.log("id", id);

  // page title for indexing
  const FormTitles = ["Formulir Klaim", "Form Foto", "Review"];

  // return form selected index
  const PageDisplay = () => {
    if (page === 0) {
      return (
        <FormulirKlaim
          formData={formData}
          setFormData={setFormData}
          provinces={provinces}
          regencies={regencies}
        />
      );
    } else if (page === 1) {
      return <FormFoto formData={formData} setFormData={setFormData} />;
    } else {
      return <Review formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="w-full md:flex md:justify-center md:items-center md:p-20">
      <div className="w-full md:w-2/4 md:bordered md:border-2 md:rounded-lg md:bg-gray-100 md:drop-shadow-lg">
        <Navigasi />
        {/* Step wizard */}
        <div className="w-full flex p-5 gap-3">
          <div
            className={`w-2/6 bordered border-t-8 rounded-t-lg flex flex-col justify-center items-center ${
              page === 0
                ? "border-green-500 bg-green-100"
                : page === 1
                ? "border-green-500 bg-green-100"
                : page === 2
                ? "border-green-500 bg-green-100"
                : "border-blue-800  bg-blue-100"
            }`}
          >
            <div className="flex gap-2 px-2 py-2 w-full justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-5 h-5 ${
                  page === 0
                    ? "text-green-600"
                    : page === 1
                    ? "text-green-600"
                    : page === 2
                    ? "text-green-600"
                    : "text-blue-800 "
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <p className="text-xs text-gray-500">Formulir Klaim</p>
            </div>
          </div>
          <div
            className={`w-2/6 bordered border-t-8 rounded-t-lg flex flex-col justify-center items-center ${
              page === 1
                ? "border-green-500 bg-green-100"
                : page === 2
                ? "border-green-500 bg-green-100"
                : "border-blue-800  bg-blue-100"
            }`}
          >
            <div className="flex gap-2 px-2 py-2 w-full justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-5 h-5 ${
                  page === 1
                    ? "text-green-600"
                    : page === 2
                    ? "text-green-600"
                    : "text-blue-800 "
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
              <p className="text-xs text-gray-500">Foto SIM & STNK</p>
            </div>
          </div>
          <div
            className={`w-2/6 bordered border-t-8 rounded-t-lg flex flex-col justify-center items-center ${
              page === 2
                ? "border-green-500 bg-green-100"
                : "border-blue-800  bg-blue-100"
            }`}
          >
            <div className="flex gap-2 px-2 py-2 w-full justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-5 h-5 ${
                  page === 2 ? "text-green-600" : "text-blue-800 "
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <p className="text-xs text-gray-500">Review</p>
            </div>
          </div>
        </div>
        {/* Form container */}
        <div className="form-container">
          <div className="body">{PageDisplay()}</div>
          <div className="footer w-full justify-center p-5 flex gap-3">
            <button
              className="py-1 px-2 bg-green-500 text-white"
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              className="py-1 px-2 bg-green-500 text-white"
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

// fetch data location from API
export async function getStaticProps(link) {
  const fetchProvinces = await fetch(
    "https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json"
  );
  const provinces = await fetchProvinces.json();

  const fetchRegencies = await fetch(`${link}`);
  const regencies = await fetchRegencies.json();

  return {
    props: {
      provinces,
      regencies,
    },
  };
}

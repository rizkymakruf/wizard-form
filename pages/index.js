import Navigasi from "../components/navigasi";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <Navigasi />
        <div className="w-full relative">
          <div className="flex overflow-hidden  md:overflow-hidden noscroll overflow-x-scroll gap-5 p-5">
            <div className="flex-none drop-shadow-md w-56 h-16 rounded-lg bg-white">
              <div className="w-full flex">
                <div className="flex">
                  <div className="w-2 rounded-tl-lg rounded-bl-lg bg-blue-800 h-16"></div>
                  <div className="flex justify-center items-center w-20 h-16 bg-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-10 h-10 text-blue-800"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <div className="w-32 flex justify-center items-center text-gray-500 text-sm">
                    Formulir Klaim
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none drop-shadow-md w-56 h-16 rounded-lg bg-white">
              <div className="w-full flex">
                <div className="flex">
                  <div className="w-2 rounded-tl-lg rounded-bl-lg bg-blue-800 h-16"></div>
                  <div className="flex justify-center items-center w-20 h-16 bg-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-10 h-10 text-blue-800"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                      />
                    </svg>
                  </div>
                  <div className="w-32 flex justify-center items-center text-gray-500 text-sm">
                    Foto SIM & STNK
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none drop-shadow-md w-56 h-16 rounded-lg bg-white">
              <div className="w-full flex">
                <div className="flex">
                  <div className="w-2 rounded-tl-lg rounded-bl-lg bg-blue-800 h-16"></div>
                  <div className="flex justify-center items-center w-20 h-16 bg-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-10 h-10 text-blue-800"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                  </div>
                  <div className="w-32 flex justify-center items-center text-gray-500 text-sm">
                    Review Data
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;

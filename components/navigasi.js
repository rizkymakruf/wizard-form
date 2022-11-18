const Navigasi = () => {
  return (
    <div className="w-full px-8 py-8 flex items-center gap-3 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="w-6 h-6 text-blue-800"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
      <p className="text-blue-800 font-semibold">Regristrasi Klaim</p>
    </div>
  );
};

export default Navigasi;

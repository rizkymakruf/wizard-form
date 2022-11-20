const FormulirKlaim = ({ formData, setFormData, provinci, regenci, kec }) => {
  //   console.log("provinces", provinci);
  //   console.log("regencies", regencies);
  const dataPro = provinci;
  console.log("d", dataPro);
  console.log("kk", regenci);

  return (
    <>
      <div className="w-full p-5 flex flex-col space-y-5">
        <input
          type={"text"}
          className="py-1 px-2 bordered border-[2.5px] focus:border-blue-800 border-gray-300 rounded-md focus:outline-none text-sm"
          placeholder="First Name..."
          value={formData.firstName}
          onChange={(event) =>
            setFormData({ ...formData, firstName: event.target.value })
          }
        ></input>
        <input
          type={"text"}
          className="py-1 px-2 bordered border-[2.5px] focus:border-blue-800 border-gray-300 rounded-md focus:outline-none text-sm"
          placeholder="Last Name..."
          value={formData.lastName}
          onChange={(event) =>
            setFormData({ ...formData, lastName: event.target.value })
          }
        ></input>
        <textarea
          className="p-2 bordered border-[2.5px] focus:border-blue-800 border-gray-300 rounded-md focus:outline-none text-sm"
          placeholder="Biodata..."
          value={formData.biodata}
          onChange={(event) =>
            setFormData({ ...formData, biodata: event.target.value })
          }
        ></textarea>
        <select
          className="p-2 text-sm bg-white bordered border-[2.5px] border-gray-300 focus:border-blue-800 rounded-md focus:outline-none"
          value={formData.provinci}
          onChange={(event) =>
            setFormData({ ...formData, provinci: event.target.value })
          }
        >
          <option value={""}>-- Select Provinsi --</option>
          {dataPro.map((x, index) => (
            <option key={index} value={x.id}>
              {x.nama}
            </option>
          ))}
        </select>
        <select
          type={"text"}
          className="p-2 text-sm bg-white bordered border-[2.5px] border-gray-300 focus:border-blue-800 rounded-md focus:outline-none"
          value={formData.regencies}
          onChange={(event) =>
            setFormData({ ...formData, regencies: event.target.value })
          }
        >
          <option value={""}>-- Select Kota --</option>
          {regenci.map((x, index) => (
            <option key={index} value={x.id}>
              {x.nama}
            </option>
          ))}
        </select>
        <select
          type={"text"}
          className="p-2 text-sm bg-white bordered border-[2.5px] border-gray-300 focus:border-blue-800 rounded-md focus:outline-none"
          value={formData.kecamatan}
          onChange={(event) =>
            setFormData({ ...formData, kecamatan: event.target.value })
          }
        >
          <option value={""}>-- Select Kecamatan --</option>
          {kec.map((x, index) => (
            <option key={index} value={x.id}>
              {x.nama}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default FormulirKlaim;

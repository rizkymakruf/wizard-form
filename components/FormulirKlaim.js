const FormulirKlaim = ({ formData, setFormData, provinces }) => {
  console.log("provinces", provinces);

  return (
    <>
      <div className="w-full p-5 flex flex-col space-y-5">
        <input
          type={"text"}
          className="py-1 px-2 bordered border-b-[2.5px] focus:border-blue-800 border-gray-300 focus:outline-none text-sm"
          placeholder="First Name..."
          value={formData.firstName}
          onChange={(event) =>
            setFormData({ ...formData, firstName: event.target.value })
          }
        ></input>
        <input
          type={"text"}
          className="py-1 px-2 bordered border-b-[2.5px] focus:border-blue-800 border-gray-300 focus:outline-none text-sm"
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
          value={formData.province}
          onChange={(event) =>
            setFormData({ ...formData, province: event.target.value })
          }
        >
          <option>-- Select Province --</option>
          {provinces.map((x) => (
            <option value={x.id}>{x.name}</option>
          ))}
        </select>
      </div>
    </>
  );
};
export default FormulirKlaim;

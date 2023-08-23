const AgeSurvey = () => {
  const ageOptions = Array.from({ length: 65 }, (_, index) =>
    (index + 16).toString()
  );

  return (
    <div className="flex flex-col items-center w-full">
      <label className="my-4 text-3xl" htmlFor="birthday">
        how old r u?
      </label>
      <select id="birthday" className="block w-full p-4 text-slate-900 text-center text-2xl bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500">
        {ageOptions.map((value) => {
          return <option key={value} className="text-center" value={value}>{value}</option>;
        })}
      </select>
    </div>
  );
};

export default AgeSurvey;

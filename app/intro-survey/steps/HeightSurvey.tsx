const HeightSurvey = () => {
  const heightOptions = Array.from({ length: 51 }, (_, index) =>
    (index + 150).toString()
  );

  return (
    <div>
      <label>Enter your Height</label>
      <select>
        {heightOptions.map((value) => {
          return <option>{value}</option>
        })}
      </select>
    </div>
  );
};

export default HeightSurvey;

const WeightSurvey = () => {
    const weightOptions = Array.from({ length: 71 }, (_, index) =>
    (index + 50).toString()
  );
    return(
        <div>
            <label>Select your weight</label>
            <select>
                {weightOptions.map((value) => {
                    return <option>{value}</option>
                })}
            </select>
        </div>
    )
}

export default WeightSurvey;
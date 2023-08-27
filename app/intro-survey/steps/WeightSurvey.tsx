import React, { ChangeEvent } from "react";

interface WeightSurveyProps {
  weight: string;
  onWeightSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const WeightSurvey: React.FC<WeightSurveyProps> = ({
  weight,
  onWeightSelect,
}) => {
  const weightOptions = Array.from({ length: 71 }, (_, index) =>
    (index + 50).toString()
  );
  return (
    <div className="flex flex-col items-center w-full">
      <label className="my-4 text-3xl" htmlFor="weight">
        select your weight
      </label>
      <select
        id="weight"
        className="block w-full p-4 text-slate-900 text-center text-2xl bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
        onChange={event => onWeightSelect(event)}
        value={weight}
      >
        {weightOptions.map((value) => {
          return (
            <option key={value} value={value}>
              {value} kg
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default WeightSurvey;

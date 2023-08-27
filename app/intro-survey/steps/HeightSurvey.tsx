import React, { ChangeEvent } from "react";

interface HeightSurveyProps {
  height: string;
  onHeightSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const HeightSurvey: React.FC<HeightSurveyProps> = ({
  height,
  onHeightSelect,
}) => {
  const heightOptions = Array.from({ length: 51 }, (_, index) =>
    (index + 150).toString()
  );

  return (
    <div className="flex flex-col items-center w-full">
      <label className="my-4 text-3xl" htmlFor="height">
        enter your height
      </label>
      <select
        id="height"
        className="block w-full p-4 text-slate-900 text-center text-2xl bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
        onChange={(event) => onHeightSelect(event)}
        value={height}
      >
        {heightOptions.map((value) => {
          return (
            <option key={value} value={value}>
              {value} cm
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default HeightSurvey;

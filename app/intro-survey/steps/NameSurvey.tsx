import React, { ChangeEvent } from "react";

interface NameSurveyProps {
  name: string;
  onNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const NameSurvey: React.FC<NameSurveyProps> = ({ name, onNameChange }) => {

  return (
    <div className="flex items-center flex-col">
      <label htmlFor="first-name" className="my-4 text-3xl">
        what's your name lil grasshoper?
      </label>
      <input
        id="first-name"
        type="text"
        placeholder="first name"
        className="p-4 my-4 w-full text-slate-800 border border-slate-200 rounded-lg bg-slate-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        value={name}
        onChange={(event) => onNameChange(event)}
      />
    </div>
  );
};

export default NameSurvey;

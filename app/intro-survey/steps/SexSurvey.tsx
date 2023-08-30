import Button from "@/app/components/UI/Button";
import { Fragment, useState } from "react";
import React from "react";

interface SexSurveyProps {
  sex: string;
  onSexSelect: (selectedSex: string) => void;
}

const SexSurvey: React.FC<SexSurveyProps> = ({ sex, onSexSelect }) => {
  const [gender, setGender] = useState<string>(sex);
  const maleSelectHandler = () => {
    setGender("male");
    onSexSelect("male");
  };
  const femaleSelectHandler = () => {
    setGender("female");
    onSexSelect("female");
  };
  const otherSelectHandler = () => {
    setGender("other");
    onSexSelect("other");
  };

  return (
    <div className="flex flex-col h-full w-full justify-center">
      <div className="w-full my-4 text-center">
        <h1 className="text-3xl">select your sex</h1>
      </div>
      <div className="flex justify-center gap-10 h-3/6">
        <Button
          onClick={femaleSelectHandler}
          label="female"
          className={
            gender === "female"
              ? "w-1/4 text-white border bg-rose-800 hover:bg-rose-800"
              : "w-1/4 bg-rose-300 hover:bg-rose-700"
          }
        />
        <Button
          onClick={maleSelectHandler}
          label="male"
          className={
            gender === "male"
              ? "w-1/4 text-white border bg-blue-800 hover:bg-blue-800"
              : "w-1/4 bg-blue-200 hover:bg-blue-700"
          }
        />
        <Button
          onClick={otherSelectHandler}
          label="other"
          className={
            gender === "other"
              ? "w-1/4 text-white border bg-purple-800 hover:bg-purple-800"
              : "w-1/4 bg-purple-200 hover:bg-purple-700"
          }
        />
      </div>
    </div>
  );
};

export default SexSurvey;

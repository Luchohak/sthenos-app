import Button from "@/app/components/UI/Button";
import { Fragment, useState } from "react";

const SexSurvey = () => {
  const [gender, setGender] = useState<string>("");
  const maleSelectHandler = () => {
    setGender("male");
  };
  const femaleSelectHandler = () => {
    setGender("female");
  };
  const otherSelectHandler = () => {
    setGender("other");
  };

  return (
    <Fragment>
      <div className="w-full my-4 text-center">
        <h1 className="inline text-3xl">select your sex</h1>
      </div>
      <div className="flex justify-center gap-8 h-3/6">
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
          className={gender === "other" ? "w-1/4 text-white border bg-purple-800 hover:bg-purple-800" : "w-1/4 bg-purple-200 hover:bg-purple-700"}
        />
      </div>
    </Fragment>
  );
};

export default SexSurvey;

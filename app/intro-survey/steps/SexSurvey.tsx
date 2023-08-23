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
    setGender("female");
  };

  return (
    <Fragment>
      <div className="w-full my-4 text-center">
        <h1 className="inline text-3xl">select your sex</h1>
      </div>
      <div className="flex justify-center gap-8 h-3/6">
        <Button
          onClick={maleSelectHandler}
          label="female"
          className="w-1/4 bg-rose-300 hover:bg-rose-700"
        />
        <Button
          onClick={femaleSelectHandler}
          label="male"
          className="w-1/4 bg-blue-300 hover:bg-blue-700"
        />
        <Button
          onClick={otherSelectHandler}
          label="other"
          className="w-1/4 bg-purple-300 hover:bg-purple-700"
        />
      </div>
    </Fragment>
  );
};

export default SexSurvey;

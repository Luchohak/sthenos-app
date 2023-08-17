"use client";

import { useState } from "react";
import AgeSurvey from "./AgeSurvey";
import HeightSurvey from "./HeightSurvey";
import WeightSurvey from "./WeightSurvey";

const SurveyPage = () => {
  const [step, setStep] = useState(1);

  const nextStepHandler = () => {
    if(step < 3)
    setStep(step + 1);
  };

  const previousStepHandler = () => {
    if (step > 1)
    setStep(step - 1);
  };

  const stepManager = () => {
    switch (step) {
      case 1:
        return <AgeSurvey />;
      case 2:
        return <HeightSurvey />;
      case 3:
        return <WeightSurvey />;
      default:
        return <p>Get started</p>;
    }
  };

  return (
    <section>
      <h1>wassup babygirl</h1>
      {stepManager()}
      <button onClick={previousStepHandler}>Previous</button>
      <button onClick={nextStepHandler}>Next</button>
    </section>
  );
};

export default SurveyPage;

"use client";

import { useState } from "react";
import AgeSurvey from "./AgeSurvey";
import HeightSurvey from "./HeightSurvey";
import WeightSurvey from "./WeightSurvey";
import NameSurvey from "./NameSurvey";
import SexSurvey from "./SexSurvey";
import GoalsSurvey from "./GoalsSurvey";
import ExperienceSurvey from "./ExperienceSurvey";

const SurveyPage = () => {
  const [step, setStep] = useState(1);

  const nextStepHandler = () => {
    if(step < 7)
    setStep(step + 1);
  };

  const previousStepHandler = () => {
    if (step > 1)
    setStep(step - 1);
  };

  const stepManager = () => {
    switch (step) {
      case 1: 
        return <NameSurvey />
      case 2:
        return <AgeSurvey />;
      case 3:
        return <HeightSurvey />;
      case 4:
        return <WeightSurvey />;
      case 5: 
        return <SexSurvey />;
      case 6: 
        return <GoalsSurvey />
      case 7: 
      return <ExperienceSurvey />
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

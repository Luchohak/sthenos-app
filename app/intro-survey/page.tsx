"use client";

import { useState } from "react";
import AgeSurvey from "./steps/AgeSurvey";
import HeightSurvey from "./steps/HeightSurvey";
import WeightSurvey from "./steps/WeightSurvey";
import NameSurvey from "./steps/NameSurvey";
import SexSurvey from "./steps/SexSurvey";
import GoalsSurvey from "./steps/GoalsSurvey";
import ExperienceSurvey from "./steps/ExperienceSurvey";
import Button from "../components/UI/Button";
import GetStartedSurvey from "./steps/GetStartedSurvey";

const SurveyPage = () => {
  const [step, setStep] = useState(0);

  const nextStepHandler = () => {
    if (step < 7) setStep(step + 1);
  };

  const previousStepHandler = () => {
    if (step > 0) setStep(step - 1);
  };

  const stepManager = () => {
    switch (step) {
      case 1:
        return <NameSurvey />;
      case 2:
        return <AgeSurvey />;
      case 3:
        return <HeightSurvey />;
      case 4:
        return <WeightSurvey />;
      case 5:
        return <SexSurvey />;
      case 6:
        return <GoalsSurvey />;
      case 7:
        return <ExperienceSurvey />;
      default:
        return (
          <GetStartedSurvey
            onStart={nextStepHandler}
            buttonLabel="Start survey"
          />
        );
    }
  };

  return (
    <section className="w-1/2 h-full">
      {stepManager()}
      {step === 0 ? (
        ""
      ) : (
        <div className="flex items-center justify-between mt-12">
          <Button
            className="w-1/4"
            onClick={previousStepHandler}
            label="Previous"
          />
          <Button
            className="w-1/4"
            onClick={nextStepHandler}
            label="Next"
          />
        </div>
      )}
    </section>
  );
};

export default SurveyPage;

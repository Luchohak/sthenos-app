"use client";

import { useState } from "react";
import { ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";

import AgeSurvey from "./steps/AgeSurvey";
import HeightSurvey from "./steps/HeightSurvey";
import WeightSurvey from "./steps/WeightSurvey";
import NameSurvey from "./steps/NameSurvey";
import SexSurvey from "./steps/SexSurvey";
import GoalsSurvey from "./steps/GoalsSurvey";
import ExperienceSurvey from "./steps/ExperienceSurvey";
import Button from "../components/UI/Button";
import GetStartedSurvey from "./steps/GetStartedSurvey";
import ThankYouSurvey from "./steps/ThankYouSurvey";

import { setUserName, setUserAge, setUserHeight } from "../redux/userSlice";
import { nameSurveySelector, ageSurveySelector, heightSurveySelector } from "../redux/selectors";

const SurveyPage = () => {
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();

  const userName = useSelector(nameSurveySelector);
  const userAge = useSelector(ageSurveySelector);
  const userHeight = useSelector(heightSurveySelector);

  const nextStepHandler = () => {
    if (step < 8) setStep(step + 1);
  };

  const previousStepHandler = () => {
    if (step > 0) setStep(step - 1);
  };

  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserName(event.target.value));
  };

  const ageSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setUserAge(event.target.value));
  };

  const heightSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setUserHeight(event.target.value));
  }

  const stepManager = () => {
    switch (step) {
      case 1:
        return <NameSurvey name={userName} onNameChange={nameChangeHandler} />;
      case 2:
        return <AgeSurvey age={userAge} onAgeSelect={ageSelectHandler} />;
      case 3:
        return <HeightSurvey height={userHeight} onHeightSelect={heightSelectHandler}/>;
      case 4:
        return <WeightSurvey />;
      case 5:
        return <SexSurvey />;
      case 6:
        return <GoalsSurvey />;
      case 7:
        return <ExperienceSurvey />;
      case 8:
        return <ThankYouSurvey />;
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
      {step === 0 || step === 8 ? (
        ""
      ) : (
        <div className="flex items-center justify-between mt-12">
          <Button
            className="w-1/4 bg-slate-200 hover:bg-slate-800"
            onClick={previousStepHandler}
            label="back"
          />
          <Button
            className={`w-1/4 ${
              step !== 7
                ? "bg-slate-200 hover:bg-slate-800"
                : " bg-green-200 hover:bg-green-700"
            } `}
            onClick={nextStepHandler}
            label={`${step !== 7 ? "next" : "complete"}`}
          />
        </div>
      )}
    </section>
  );
};

export default SurveyPage;

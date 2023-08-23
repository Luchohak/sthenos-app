import Button from "@/app/components/UI/Button";
import { useState } from "react";

const GoalsSurvey = () => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const goalsList = [
    "Lose weight",
    "Gain Muscle",
    "Improve Strenght",
    "Increase Mobility/Flexibility",
    "Develop Endurance",
    "Get better at specific skills",
  ];

  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((item) => item !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  return (
    <div>
      <div className="w-full my-4 text-center">
        <h1 className="text-3xl">choose the main reasons why you're here</h1>
      </div>
      <div className="flex flex-col gap-3">
        {goalsList.map((goal) => (
          <Button
            className={` bg-yellow-200 hover:bg-yellow-500 ${
              selectedGoals.includes(goal) ? "border-2 bg-yellow-500" : ""
            }`}
            key={goal}
            label={goal}
            onClick={() => toggleGoal(goal)}
          />
        ))}
      </div>
    </div>
  );
};

export default GoalsSurvey;

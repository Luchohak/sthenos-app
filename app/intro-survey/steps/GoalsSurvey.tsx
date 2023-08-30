import Button from "@/app/components/UI/Button";
import { useEffect, useState } from "react";

interface GoalsSurveyProps {
  goals: string[];
  onSelectGoal: (goals: string[]) => void;
}

const GoalsSurvey: React.FC<GoalsSurveyProps> = ({ goals, onSelectGoal }) => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>(goals);

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

  useEffect(() => {
    onSelectGoal(selectedGoals);
  },[selectedGoals, onSelectGoal])

  return (
    <div className="w-full">
      <div className="w-full my-4 text-center">
        <h1 className="text-3xl">i'm here to:</h1>
      </div>
      <div className="flex flex-col gap-3 w-4/6 m-auto">
        {goalsList.map((goal) => (
          <Button
            className={` bg-yellow-200 hover:bg-yellow-500 ${
              selectedGoals.includes(goal)
                ? "text-white border-4 bg-yellow-500"
                : ""
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

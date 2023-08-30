import Button from "@/app/components/UI/Button";
import { useState, useEffect } from "react";

interface ExperienceSurveyProps {
  experienceList: string[];
  onExperienceSelect: (experienceList: string[]) => void;
}

const ExperienceSurvey: React.FC<ExperienceSurveyProps> = ({experienceList, onExperienceSelect}) => {
  const [selectedExperience, setSelectedExperience] = useState<string[]>(experienceList);

  const experienceEntries = [
    "I've done bodyweight training for some time",
    "I've lifted weights before",
    "I've been in a team of some sort (sports, crossfit, powerlifting)",
    "I've practiced yoga",
    "I run/jog/hike/swim regularly",
  ];

  const toggleExperienceItem = (experienceItem: string) => {
    if (selectedExperience.includes(experienceItem)) {
      setSelectedExperience(
        selectedExperience.filter((item) => item !== experienceItem)
      );
    } else {
      setSelectedExperience([...selectedExperience, experienceItem]);
    }
  };

  useEffect(() => {
    onExperienceSelect(selectedExperience)
  }, [onExperienceSelect, selectedExperience])



  return (
    <div>
      <div className="w-full my-4 text-center">
        <h1 className="text-3xl">Select any previous experience</h1>
      </div>
      <div className="flex flex-col gap-3 w-4/6 m-auto">
        {experienceEntries.map((experienceItem) => (
          <Button
            className={`bg-purple-300 hover:bg-purple-700 ${
              selectedExperience.includes(experienceItem)
                ? "text-white border-4 bg-purple-700"
                : ""
            }`}
            key={experienceItem}
            label={experienceItem}
            onClick={() => toggleExperienceItem(experienceItem)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSurvey;

import Button from "../../components/UI/Button";

interface GetStartedProps {
  onStart: () => void;
  buttonLabel: string;
}

const GetStartedSurvey: React.FC<GetStartedProps> = ({
  onStart,
  buttonLabel,
}) => {
  return (
    <div className="flex items-center flex-col">
      <div>
        <h1 className="text-3xl my-4">help your coach get to know you better</h1>
      </div>
      <div>
        <Button className="bg-slate-50 hover:bg-slate-800" onClick={onStart} label={buttonLabel} />
      </div>
    </div>
  );
};

export default GetStartedSurvey;

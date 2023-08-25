import Button from "@/app/components/UI/Button";
import Link from "next/link";

const ThankYouSurvey = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl my-4">thanks!</h1>
      <p className="text-lg">
        this will help your coach align your workouts with your goals and experience
      </p>
      <Link
        href="/"
        className="rounded my-10 py-2 px-4 bg-slate-200 text-slate-900 hover:bg-slate-400 hover:text-slate-800"
      >
        my profile
      </Link>
    </div>
  );
};

export default ThankYouSurvey;

import Link from "next/link";

const ThankYouSurvey = () => {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <div className="rounded bg-slate-400 w-1/2 p-4 text-slate-950 drop-shadow-2xl min-w-42">
        <h1 className="text-3xl my-4">thanks!</h1>
        <p className="text-2xl">
          this helps a lot
        </p>
      </div>
      <div className="rounded bg-slate-400 w-1/2 p-4 text-slate-950 drop-shadow-2xl">
        <h1 className="text-3xl my-4">one last thingy!</h1>
        <p className="text-2xl">sign up so we can complete your setup</p>
      </div>
      <Link
        href="api/auth/login"
        className="rounded text-lg font-bold flex items-center justify-center w-32 h-16 py-2 px-4 bg-slate-100 text-slate-900 hover:bg-amber-700 hover:text-slate-100"
      >
        sign up
      </Link>
    </div>
  );
};

export default ThankYouSurvey;

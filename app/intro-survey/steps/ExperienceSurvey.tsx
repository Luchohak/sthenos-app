const ExperienceSurvey = () => {
  return (
    <div>
      <div>
        <h1>Select any previous experience</h1>
      </div>
      <div>
        <input type="checkbox" id="exp1" name="exp1" />
        <label htmlFor="exp1">I've done bodyweight training for some time</label>
        <input type="checkbox" id="exp2" name="exp2" />
        <label htmlFor="exp2">I've lifted weights before</label>
        <input type="checkbox" id="exp3" name="exp3" />
        <label htmlFor="exp3">I've been in a team of some sort (sports, crossfit, powerlifting) </label>
        <input type="checkbox" id="exp4" name="exp4" />
        <label htmlFor="exp4">I've practiced yoga</label>
        <input type="checkbox" id="exp5" name="exp5" />
        <label htmlFor="exp5">I run/jog/hike/swim regularly</label>
      </div>
    </div>
  );
};

export default ExperienceSurvey;

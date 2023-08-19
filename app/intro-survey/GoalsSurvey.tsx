const GoalsSurvey = () => {
  return (
    <div>
      <div>
        <h1>Choose the main reasons why you're here</h1>
      </div>
      <div>
        <input type="checkbox" id="goal1" name="goal1" />
        <label htmlFor="goal1">Lose weight</label>
        <input type="checkbox" id="goal2" name="goal2" />
        <label htmlFor="goal2">Gain Muscle</label>
        <input type="checkbox" id="goal3" name="goal3" />
        <label htmlFor="goal3">Improve Strenght</label>
        <input type="checkbox" id="goal4" name="goal4" />
        <label htmlFor="goal4">Increase Mobility/Flexibility</label>
        <input type="checkbox" id="goal5" name="goal5" />
        <label htmlFor="goal5">Develop Endurance</label>
        <input type="checkbox" id="goal6" name="goal6" />
        <label htmlFor="goal6">Get better at specific movements</label>
      </div>
    </div>
  );
};

export default GoalsSurvey;

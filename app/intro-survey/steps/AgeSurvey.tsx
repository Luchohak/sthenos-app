import { Fragment } from "react";

const AgeSurvey = () => {
  return (
    <Fragment>
      <label htmlFor="birthday">When did you arrive to planet Earth?</label>
      <input type="date" id="birthday" />
    </Fragment>
  );
};

export default AgeSurvey;

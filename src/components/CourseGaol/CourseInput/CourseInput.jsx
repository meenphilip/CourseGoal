import { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

function CourseInput(props) {
  const [enteredText, setEnteredText] = useState("");

  const addNewCourseGoalHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // combine the input into an object
    // const courseGoalData = {
    //   id: Math.random().toString(),
    //   text: enteredText,
    // };

    // or since it one item just do this and
    // add an id in the app.js
    props.onSaveCourseGoal(enteredText);

    setEnteredText("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" value={enteredText} onChange={addNewCourseGoalHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;

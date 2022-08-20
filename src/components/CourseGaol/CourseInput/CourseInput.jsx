import { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

function CourseInput() {
  const [enteredText, setEnteredText] = useState("");

  const addNewCourseGoalHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const onSaveHandler = (event) => {
    event.preventDefault();

    // combine the input into an object
    const courseGoalData = {
      text: enteredText,
    };

    console.log(courseGoalData);

    setEnteredText("");
  };
  return (
    <form onSubmit={onSaveHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" value={enteredText} onChange={addNewCourseGoalHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;

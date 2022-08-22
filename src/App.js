import { useState } from "react";
import "./App.css";
import CourseGoalList from "./components/CourseGaol/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGaol/CourseInput/CourseInput";

const INITIAL_COURSE_GOALS = [
  {
    id: "g1",
    text: "Do all course exercise!",
  },
  {
    id: "g2",
    text: "Finish the course!",
  },
  {
    id: "g3",
    text: "Build the UI",
  },
];

function App() {
  const [courseGoals, setCourseGoals] = useState(INITIAL_COURSE_GOALS);

  // const addGoalHandler = (enteredCourseGoal) => {
  //   setCourseGoals((prevState) => {
  //     return [enteredCourseGoal, ...prevState];
  //   });
  // };

  const addGoalHandler = (enteredCourseGoal) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({
        id: Math.random().toString(),
        text: enteredCourseGoal,
      });
      return updatedGoals;
    });
  };

  return (
    <div className="App">
      <section id="goal-form">
        <CourseInput onSaveCourseGoal={addGoalHandler} />
      </section>
      <section id="goals">
        <CourseGoalList item={courseGoals} />
      </section>
    </div>
  );
}

export default App;

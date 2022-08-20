import "./App.css";
import CourseGoalList from "./components/CourseGaol/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGaol/CourseInput/CourseInput";

function App() {
  const courseItems = [
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
      text: "Build the UI by myself",
    },
  ];

  return (
    <div className="App">
      <section id="goal-form">
        <CourseInput />
      </section>
      <section id="goals">
        <CourseGoalList item={courseItems} />
      </section>
    </div>
  );
}

export default App;

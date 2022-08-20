import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

const CourseGoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.item.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;

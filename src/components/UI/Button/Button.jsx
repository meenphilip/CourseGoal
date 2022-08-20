import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button type={props.type} className="button">
        {props.children}
      </button>
    </div>
  );
};

export default Button;

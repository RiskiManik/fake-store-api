// eslint-disable-next-line react/prop-types
const Button = ({ type, children }) => (
  <button className={`btn ${type}`}>{children}</button>
);

export default Button;

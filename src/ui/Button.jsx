function Button({ color, children }) {
  return <button className={`btn btn-outline ${color} `}>{children}</button>;
}

export default Button;

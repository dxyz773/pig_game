function Button({ color, children, onClick, disabled = false }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn ${color} w-44 transition-all duration-300 hover:scale-105`}
    >
      {children}
    </button>
  );
}

export default Button;

const Button = ({ text }) => {
  return (
    <button
      className="hidden md:block p-3 px-6 pt-2 text-white bg-blue rounded-full self-baseline"
      onClick={(event) => (event.target.innerText = "You clicked me!")}
    >
      {text}
    </button>
  );
};

export default Button;

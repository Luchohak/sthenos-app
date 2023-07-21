interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick} className={"rounded my-2 py-2 px-4 bg-slate-400  text-slate-900"}>
      {label}
    </button>
  );
};

export default Button;

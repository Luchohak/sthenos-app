interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className }) => {
  return (
    <button type={type} onClick={onClick} className={`rounded my-2 py-2 px-4 bg-slate-400 hover:text-slate-200 text-slate-900 hover:bg-slate-500  ' ${className}`}>
      {label}
    </button>
  );
};

export default Button;

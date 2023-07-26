import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    //Checks if the click target is the overlay
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  if (!isOpen) return null;
  return (
    <div
      className="flex justify-center items-center bg-slate-400 bg-opacity-70 w-full h-full top-0 left-0 fixed"
      onClick={handleOverlayClick}
    >
      <div className="rounded bg-slate-200 p-4 h-4/5 w-4/5">
        <button
          className="absolute text-2xl cursor-pointer border-none bg-none color text-slate-800"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

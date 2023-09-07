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
      <div className="flex justify-end rounded  bg-slate-300 py-4 px-8">
        <button
          className="rounded-full absolute text-2xl cursor-pointer border-none bg-slate-400 text-slate-800 py-1 px-3 hover:bg-slate-800 hover:text-slate-200"
          onClick={onClose}
        >
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

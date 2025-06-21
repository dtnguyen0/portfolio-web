interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function ProjectModal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-3xl shadow-xl relative">
        <button className="absolute top-2 right-2 text-gray-300 hover:text-white" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export default ProjectModal

const Dialog = ({ className, children }) => {
  return (
    <div className="h-screen w-full fixed backdrop-blur-sm top-0 left-0 flex items-center justify-center backdrop-brightness-50 z-10">
      <dialog
        className={`mb-16 rounded-lg shadow-lg bg-slate-300 p-4 ${className}`}
        open
      >
        {children}
      </dialog>
    </div>
  );
};

export default Dialog;

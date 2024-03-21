const Input = (props) => {
  const { label, type, placeholder, className } = props;

  return (
    <div>
      <label className="block text-black font-semibold py-2 mb-1">
        {label}
      </label>
      <input type={type} placeholder={placeholder} className={className} />
    </div>
  );
};

export default Input;

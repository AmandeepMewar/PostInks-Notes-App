const Input = (props) => {
  const {
    id,
    label,
    type,
    placeholder,
    className,
    name,
    required,
    defaultValue,
  } = props;

  return (
    <div>
      <label htmlFor={id} className="block text-black font-semibold py-2 mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        defaultValue={defaultValue}
        name={name}
        id={id}
      />
    </div>
  );
};

export default Input;

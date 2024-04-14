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
    onChange,
    value,
  } = props;

  return (
    <>
      <label htmlFor={id} className="block text-black font-semibold py-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        defaultValue={defaultValue}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        required
      />
    </>
  );
};

export default Input;

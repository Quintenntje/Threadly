interface InputProps {
  type: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
}

const Input = ({
  type,
  placeholder,
  className,
  value,
  onChange,
  onFocus,
  onKeyDown,
  disabled,
  required,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={` border-black border-2 p-4 w-full ${className}`}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      disabled={disabled}
      required={required}
    />
  );
};

export default Input;

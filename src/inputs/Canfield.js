import { useRef } from "react";

const CanfieldInput = ({label, name}) => {
  const inputRef = useRef(null);

  const onClick = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    inputRef.current.setSelectionRange(0, 0);
  }

  const onChange = (e) => {
    e.preventDefault();
    inputRef.current.blur();
  }

  return (
    <div className='canfield'>
      <label htmlFor='input'>
        {label}
      </label>
      <input name={name} ref={inputRef} autoComplete='off' id='input' defaultValue='Enter your last name' onChange={onChange} onClick={onClick} />
    </div>
  );
}

export default CanfieldInput;

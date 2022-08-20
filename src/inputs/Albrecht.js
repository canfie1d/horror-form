import { useRef } from "react";

const AlbrechtInput = ({label, name, value, onChange}) => {
  const ref = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    //input.value = e.target.value.split("").reverse().join("");
    const textLength = e.target.value.length;

    ref.current.style.marginLeft = `${
      textLength * Math.floor(Math.random() * (100 - 10 + 1) + 1)
    }px`;
    onChange({name: name, value: e.target.value});
  }

  return (
    <div className='albrecht'>
      <label htmlFor='input'>
        {label}
      </label>
      <input name={name} ref={ref} id='input' onChange={handleChange} />
    </div>
  )
}

export default AlbrechtInput;

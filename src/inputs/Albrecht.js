import { useRef } from "react";

const AlbrechtInput = ({label, name}) => {
  const ref = useRef(null);

  const onChange = (e) => {
    e.preventDefault();
    //input.value = e.target.value.split("").reverse().join("");
    const textLength = e.target.value.length;

    ref.current.style.marginLeft = `${
      textLength * Math.floor(Math.random() * (100 - 10 + 1) + 1)
    }px`;
  }

  return (
    <div className='albrecht'>
      <label htmlFor='input'>
        {label}
      </label>
      <input name={name} ref={ref} id='input' onChange={onChange} />
    </div>
  )
}

export default AlbrechtInput;

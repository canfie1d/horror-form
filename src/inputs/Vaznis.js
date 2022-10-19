import { useRef } from "react";

const VaznisInput = ({label, name, onChange}) => {
  const ref = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    e.target.max = 50 + Math.floor(e.target.value / 1.01);
    e.target.style.width =
      (450 + (e.target.max - e.target.min) / 1).toString() + "px";
      ref.current.innerHTML = e.target.value;

    onChange({name: name, value: e.target.value});
  }

  return (
    <div className='vaznis'>
      <label htmlFor='slider' ref={ref} id='sliderLabel'>
        {label}
      </label>
      <input name={name} id='slider' type='range' min='0' max='120' value='0' onChange={handleChange} />
    </div>
  );
}

export default VaznisInput;

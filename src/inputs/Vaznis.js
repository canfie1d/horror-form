import { useRef } from "react";

const VaznisInput = ({label, name}) => {
  const ref = useRef(null);

  const onChange = (e) => {
    e.preventDefault();
    e.target.max = 50 + Math.floor(e.target.value / 1.01);
    e.target.style.width =
      (450 + (e.target.max - e.target.min) / 1).toString() + "px";
      ref.current.innerHTML = e.target.value;
  }

  return (
    <div className='vaznis'>
      <label htmlFor='slider' ref={ref} id='sliderLabel'>
        {label}
      </label>
      <input name={name} id='slider' type='range' min='0' max='120' value='0' onChange={onChange} />
    </div>
  );
}

export default VaznisInput;

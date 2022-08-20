import { useRef } from "react";

const WilliamsInput = ({label, name, onChange, formValid}) => {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const mOver = () => {
    buttonRef.current.classList.toggle("button-move");
    // console.log("in", buttonRef.current.classList);
  }

  // const mOut = () => {
  //   buttonRef.current.classList.remove("button-move");
  //   // console.log("out", buttonRef.current.classList);
  // }

  const handleChange = (e) => {
    e.preventDefault();
    onChange({name: name, value: e.target.value});
    setTimeout(() => {
      inputRef.current.value = "Too Slow";
      buttonRef.current.classList.add("button-move");
    }, 1000);
  }

  return (
    <div className='williams'>
      <label htmlFor='input'>
        {label}
      </label>
      <input name={name} ref={inputRef} id='input' onChange={handleChange} />
      <button disabled={!formValid} ref={buttonRef} className='button' onMouseEnter={mOver}> Submit</button>
    </div>
  );
}

export default WilliamsInput;

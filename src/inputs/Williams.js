import { useRef } from "react";

const WilliamsInput = ({label, name}) => {
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

  const onChange = (e) => {
    e.preventDefault();
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
      <input name={name} ref={inputRef} id='input' onChange={onChange} />
      <button ref={buttonRef} className='button' onMouseEnter={mOver}> Submit</button>
    </div>
  );
}

export default WilliamsInput;

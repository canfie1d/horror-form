import { useRef } from "react";

const WilliamsInput = () => {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const mOver = () => {
    buttonRef.current.classList.add("button-move");
    // console.log("in", buttonRef.current.classList);
  }

  const mOut = () => {
    buttonRef.current.classList.remove("button-move");
    // console.log("out", buttonRef.current.classList);
  }

  const onChange = (e) => {
    e.preventDefault();
    setTimeout(() => {
      inputRef.current.value = "Too Slow";
    }, 1000);
  }

  return (
    <div className='williams'>
      <label htmlFor='input'>
        Quickly finish the form
      </label>
      <input ref={inputRef} id='input' onChange={onChange} />
      <button ref={buttonRef} className='button' onMouseEnter={mOver} onMouseLeave={mOut}> Submit</button>
    </div>
  );
}

export default WilliamsInput;

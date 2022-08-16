import { useRef } from "react";

const WilsonInput = ({label, name}) => {
  const wrapRef = useRef(null);
  const inputRef = useRef(null);
  const labelRef = useRef(null);

  let upScale = 1;

  const scale = 0.05;

  const onChange = (e) => {
    e.preventDefault();
    labelRef.current.innerHTML = e.target.value;
  };

  const changeScale = (increment) => {
    wrapRef.current.style.transform = "scale(" + increment + ")";
  }

  const handleUp = (e) => {
    e.preventDefault();
    inputRef.current.value = parseInt(inputRef.current.value) + 1;
    labelRef.current.innerHTML = inputRef.current.value;
    upScale += scale;
    changeScale(upScale);
    // downScale -= scale;
    // changeScale(down, downScale);
  };

  const handleDown = (e) => {
    e.preventDefault();
    inputRef.current.value = parseInt(inputRef.current.value) - 1;
    labelRef.current.innerHTML = inputRef.current.value;
    upScale -= scale;
    changeScale(upScale);
    // upScale -= scale;
    // changeScale(up, upScale);
    // console.log(wrap.style.top);
  };

  return (
    <div className='wilson' ref={wrapRef} id="wrap">
      <label ref={labelRef} id="label" htmlFor='input'>
        {label}
      </label>
      <button id="up" onClick={handleUp}>⬆️</button>
      <input name={name} ref={inputRef} id='input' type="range" min="0" max="20" onChange={onChange} />
      <button id="down" onClick={handleDown}>⬇️</button>
    </div>
  )
}

export default WilsonInput;

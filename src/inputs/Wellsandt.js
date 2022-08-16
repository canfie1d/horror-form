import { useEffect, useRef, useState } from "react";

const Wellsandt = () => {
  const labelRef = useRef(null);
  const inputRef = useRef(null);

  const [defaultLabel, setDefaultLabel] = useState('')

  useEffect(() => {
    if (labelRef.current) {
      setDefaultLabel(labelRef.current.innerText)
    }
  }, [])

  const onKeyDown = (e) => {
      e.preventDefault();

      if (e.nativeEvent.target.code === "Backspace") {
        const innerText = labelRef.current.innerText;
        labelRef.current.innerText = innerText.slice(0, -1);
      } else if (e.code === "Space") {
        labelRef.current.innerText = labelRef.current.innerText + "&nbsp;";
      } else {
        if (labelRef.current.innerText === defaultLabel) {
          labelRef.current.innerText = String.fromCharCode(e.keyCode);
        } else {
          labelRef.current.innerText = labelRef.current.innerText + String.fromCharCode(e.keyCode);
        }
      }

      inputRef.current.value = defaultLabel;
  }

  return (
    <div className='wellsandt'>
      <div className="input-container">
        <input ref={inputRef} id="input" type="text" placeholder=" " onKeyDown={onKeyDown} />
        <label ref={labelRef} id="label" className="placeholder">Email Address</label>
      </div>
    </div>
  )
}

export default Wellsandt;
import { useEffect, useRef, useState } from "react";

const Wellsandt = ({label, name, onChange}) => {
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
      if (e.key === "Tab") {
        inputRef.current.blur();
        return;
      }
      if (e.key === "Backspace") {
        labelRef.current.innerText = labelRef.current.innerText.substring(0, labelRef.current.innerText.length -1);
      } else {
        if (labelRef.current.innerText === defaultLabel) {
          labelRef.current.innerText = String.fromCharCode(e.key);
        } else {
          const newKey = e.shiftKey ? e.key.toUpperCase() : e.key;

          labelRef.current.innerText = labelRef.current.innerText + newKey.replace('SHIFT', '');
        }
      }

      inputRef.current.value = defaultLabel;
      onChange({name: name, value: labelRef.current.innerText});
  }

  return (
    <div className='wellsandt'>
      <div className="input-container">
        <input name={name} ref={inputRef} id="input" type="text" placeholder=" " onKeyDown={onKeyDown} />
        <label ref={labelRef} id="label" className="placeholder">{label}</label>
      </div>
    </div>
  )
}

export default Wellsandt;

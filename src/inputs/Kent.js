import {useState } from "react";

const KentInput = ({label, name, onChange}) => {
  const [isFieldLocked, setIsFieldLocked] = useState(false);

  setInterval(() => {
    setIsFieldLocked(!isFieldLocked);
  }, [2000]);

  return (
    <div className='kent'>
      <label htmlFor='input'>
        {label}
      </label>
      <input name={name} id='input' readOnly={isFieldLocked} onChange={(e)=>onChange({name: name, value: e.target.value})} />
    </div>
  )
}

export default KentInput;

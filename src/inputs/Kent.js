import { useEffect, useState } from "react";

const KentInput = ({label, name}) => {
  const [isFieldLocked, setIsFieldLocked] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsFieldLocked(!isFieldLocked);
    }, [1000]);
  }, [isFieldLocked])

  return (
    <div className='kent'>
      <label htmlFor='input'>
        {label}
      </label>
      <input name={name} id='input' readOnly={isFieldLocked} />
    </div>
  )
}

export default KentInput;

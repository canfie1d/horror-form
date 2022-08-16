import { useEffect, useState } from "react";

const KentInput = () => {
  const [isFieldLocked, setIsFieldLocked] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsFieldLocked(!isFieldLocked);
    }, [1000]);
  }, [isFieldLocked])

  return (
    <div className='kent'>
      <label htmlFor='input'>
        State
      </label>
      <input id='input' readOnly={isFieldLocked} />
    </div>
  )
}

export default KentInput;

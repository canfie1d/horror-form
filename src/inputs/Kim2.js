import { useState } from "react";
import Flex from "../Flex";

const KimInput2 = ({label, name, onChange}) => {
  const [phoneNumber, setPhoneNumber] = useState('0000000000');
  // let areaCode = 0;

  // const incrementAreaCode = (e) => {
  //   e.preventDefault();
  //   areaCode++;
  //   // console.log(areaCode)
  //   document.getElementById("input-area-code").innerText = `(${areaCode})`;
  // }

  const incrementPhoneNumber = (e) => {
    e.preventDefault();
    const newNumber = (parseInt(phoneNumber) + 10).toString().padStart(10, '0');
    setPhoneNumber(newNumber)
    document.getElementById("input-phone-number").innerText = newNumber;
    e.target.name = name;
    e.target.value = newNumber;
    onChange({name: name, value: e.target.value});
  }

  return (
    <div className='kim'>
      <div className='form form-phone-number'>
        <label htmlFor='input'>{label}</label>
        <Flex>
          {/* <Flex>
            <div id='input-area-code' className='incrementer-input'>(000)</div>
            <button id='area-code-incrementer' className='incrementer' onClick={incrementAreaCode}>+</button>
          </Flex> */}
          <Flex>
            <input readOnly hidden name={name} value={phoneNumber} />
            <div id='input-phone-number' className='incrementer-input'>{phoneNumber}</div>
            <button id='phone-number-incrementer' className='incrementer' onClick={incrementPhoneNumber}>+</button>
          </Flex>
        </Flex>
        {/* <!-- <input id='input' /> --> */}
      </div>
    </div>
  );
}

export default KimInput2;

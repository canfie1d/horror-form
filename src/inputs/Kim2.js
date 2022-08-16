import Flex from "../Flex";

const KimInput2 = () => {
  let phoneNumber = 0;
  let areaCode = 0;

  const incrementAreaCode = (e) => {
    e.preventDefault();
    areaCode++;
    // console.log(areaCode)
    document.getElementById("input-area-code").innerText = `(${areaCode})`;
  }

  const incrementPhoneNumber = (e) => {
    e.preventDefault();
    phoneNumber++;
    // console.log(phoneNumber)
    document.getElementById("input-phone-number").innerText = phoneNumber;
  }

  return (
    <div className='kim'>
      <div className='form form-phone-number'>
        <label htmlFor='input'>Phone number</label>
        <Flex>
          <Flex>
            <div id='input-area-code' className='incrementer-input'>(000)</div>
            <button id='area-code-incrementer' className='incrementer' onClick={incrementAreaCode}>+</button>
          </Flex>
          <Flex>
            <div id='input-phone-number' className='incrementer-input'>0000000</div>
            <button id='phone-number-incrementer' className='incrementer' onClick={incrementPhoneNumber}>+</button>
          </Flex>
        </Flex>
        {/* <!-- <input id='input' /> --> */}
      </div>
    </div>
  );
}

export default KimInput2;

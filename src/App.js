import { useEffect, useState } from 'react';
import Flex from './Flex';
import PatnodeInput from './inputs/Patnode';
import VaznisInput from './inputs/Vaznis';
import CoxInput from "./inputs/Cox";
import WilsonInput from './inputs/Wilson';
import AlbrechtInput from './inputs/Albrecht';
import WellsandtInput from './inputs/Wellsandt';
import KentInput from './inputs/Kent';
import CanfieldInput from './inputs/Canfield';
import KimInput from './inputs/Kim';
// import KimInput2 from './inputs/Kim2';
import WilliamsInput from './inputs/Williams';
import BorstInput from './inputs/Borst';
import './app.scss';

function App() {
  const [error, setError] = useState(null);
  const [dirty, setDirty] = useState(false);
  const [formValues, setFormValues] = useState({
    'first-name': '',
    'last-name': '',
    'address': '',
    'city': '',
    'state': '',
    'zip-code': '',
    'password': '',
    'password-confirm': '',
    'submissions': '',
    'age': '',
    'email-address': '',
    'phone-number': '',
    'finish-form': ''
  });
  console.log(formValues);

  useEffect(() => {
    Object.entries(formValues).find(([key, value]) => {
      if (value === '') {
        setError('There was an ERROR in the form.')
      } else {
        setError(null);
      }
      return null;
    });

  }, [formValues]);

  const handleChange = ({name, value}) => {
    if (!dirty) setDirty(true);
    const newValues = {...formValues, [name]: value};
    setFormValues(newValues);
  }

  return (
    <div className="app">
      <header className="header">
      ⍼⌰⌱ submit this form and win money ⌱⌰⍼
      </header>
      <div className='text-center mb-100'>
        <p className='text-white'>The spookiest thing in software is a bad user experience.</p>
        <p className='text-white'>All of these form inputs were created by the frontend team with the sole purpose of creating frustration.</p>
        <p className='text-white'>Can you resist being scared away and face the form until the end??</p>
        <p className='text-white'>The first 3 people to submit the form will receive a AmEx gift card! Winners will be notified via email and gift cards sent to the address supplied in the form. *Exactly 2 submissions per person.</p>
        {error && dirty && (
          <p className='text-danger' style={{fontSize: '1.5rem', textAlign: 'center'}}>{error}</p>
        )}
        </div>
      <form name="horror" method="post">
        <input type="hidden" name="form-name" value="horror" />
        <Flex>
          <Flex.Column>
            <BorstInput label='First Name' name='first-name' onChange={handleChange} />
          </Flex.Column>
          <Flex.Column>
            <CanfieldInput label='Last Name' name='last-name' onChange={handleChange} />
          </Flex.Column>
        </Flex>
        <Flex>
          <Flex.Column>
            <AlbrechtInput label='Address' name='address' onChange={handleChange} />
          </Flex.Column>
          <Flex.Column>
            <CoxInput label='City' name='city' onChange={handleChange} />
          </Flex.Column>
        </Flex>
        <Flex>
          <Flex.Column>
            <KentInput label='State' name='state' onChange={handleChange} />
          </Flex.Column>
          <Flex.Column>
            <PatnodeInput label='Zip Code' name='zip-code' onChange={handleChange} />
          </Flex.Column>
        </Flex>
        <KimInput label1='Password' label2='Confirm Password' name1='password' name2='password-confirm' value={formValues['password']} value2={formValues['password-confirm']} onChange={handleChange} />
        <VaznisInput label='Number of Submissions' name='submissions' onChange={handleChange} />
        <WilsonInput label="Select age (note: value updates after selecting)" name='age' onChange={handleChange} />
        <WellsandtInput label='Email Address' name='email-address' onChange={handleChange} />
        {/* <KimInput2 label='Phone Number' name='phone-number' onChange={handleChange} /> */}
        <WilliamsInput label='Quickly finish the form' name='finish-form' onChange={handleChange} formValid={!error && dirty} />
      </form>
    </div>
  );
}

export default App;

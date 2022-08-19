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
import KimInput2 from './inputs/Kim2';
import WilliamsInput from './inputs/Williams';
import BorstInput from './inputs/Borst';
import './app.scss';

function App() {
  return (
    <div className="app">
      <header className="header">
        Submit this form and win money
      </header>
      <form name="horror" method="post">
        <input type="hidden" name="form-name" value="horror" />
        <Flex>
          <Flex.Column>
            <BorstInput label='First Name' name='first-name' />
          </Flex.Column>
          <Flex.Column>
            <CanfieldInput label='Last Name' name='last-name' />
          </Flex.Column>
        </Flex>
        <Flex>
          <Flex.Column>
            <AlbrechtInput label='Address' name='address' />
          </Flex.Column>
          <Flex.Column>
            <CoxInput label='City' name='city' />
          </Flex.Column>
        </Flex>
        <Flex>
          <Flex.Column>
            <KentInput label='State' name='state' />
          </Flex.Column>
          <Flex.Column>
            <PatnodeInput label='Zip Code' name='zip-code' />
          </Flex.Column>
        </Flex>
        <KimInput label1='Password' label2='Confirm Password' name1='password' name2='password-confirm' />
        <VaznisInput label='Number of Submissions' name='submissions' />
        <WilsonInput label="Select age (note: value updates after selecting)" name='age' />
        <WellsandtInput label='Email Address' name='email-address' />
        <KimInput2 label='Phone Number' name='phone-number' />
        <WilliamsInput label='Quickly finish the form' name='finish-form' />
      </form>
    </div>
  );
}

export default App;

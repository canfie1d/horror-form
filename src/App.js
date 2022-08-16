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
      <form>
        <Flex>
          <Flex.Column>
            <BorstInput />
          </Flex.Column>
          <Flex.Column>
            <CanfieldInput />
          </Flex.Column>
        </Flex>
        <Flex>
          <Flex.Column>
            <AlbrechtInput />
          </Flex.Column>
          <Flex.Column>
            <CoxInput />
          </Flex.Column>
        </Flex>
        <Flex>
          <Flex.Column>
            <KentInput />
          </Flex.Column>
          <Flex.Column>
            <PatnodeInput />
          </Flex.Column>
        </Flex>
        <KimInput />
        <VaznisInput />
        <WilsonInput />
        <WellsandtInput />
        <KimInput2 />
        <WilliamsInput />
      </form>
    </div>
  );
}

export default App;

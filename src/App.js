
import './App.css';
import HocData from './HOC/HOCDATA';
import HOC from './HOC/HOCF';
import HOCTWO from './HOC/HOCF2';
import PureCom from './HOC/PureCompo';
function App() {
  return (
    <div className="App">
      <HOC val={HocData}></HOC>
      <HOCTWO val={HocData}></HOCTWO>
      <PureCom></PureCom>
    </div>
  );
}

export default App;

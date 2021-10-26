import Logo from './components/Logo';
import Menu from './components/Menu'

import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage:'./logo192.png'}}>
      <header className="App-header">
        <Logo/>
        <Menu/>
      </header>
      <img src="/logo192.png" alt='imagen'/>
    </div>
  );
}

export default App;

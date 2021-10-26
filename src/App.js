import Logo from './components/Logo';
import Menu from './components/Menu'

import './App.css';
import Copy from './components/Copy';
import Tarjeta from './components/Tarjeta';
import img1 from './images/pic01.jpg'
import img2 from './images/pic02.jpg'
import img3 from './images/pic03.jpg'


function App() {
  return (
    <div className="App">
      <div className="content-1">
        <div className="content-1-1">
          <header className="App-header">
            <Logo/>
            <Menu/>
          </header>
          <Copy />
        </div>
        <div className="content-1-2">
          <Tarjeta srcImg={img1} title={"hola"} >Casas</Tarjeta>
          <Tarjeta srcImg={img2} />
          <Tarjeta srcImg={img3} />
        </div>
      </div>
      <div className="content-2">
        <Logo />
      </div>
      <div className="content-3">
        <Logo />

      </div>

    </div>
  );
}

export default App;

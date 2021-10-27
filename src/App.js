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
          <Tarjeta srcImg={img1} title="something here" titleOfText='algun texto'>t perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</Tarjeta>
          <Tarjeta srcImg={img2} title={'interesting title'} titleOfText={'interesting subtitle'} >is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has</Tarjeta>
          <Tarjeta srcImg={img3} title={'finally title'} titleOfText={'finally subtitle'}>umour, or randomised words which don't look even slightly believable. If you are going to</Tarjeta>
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

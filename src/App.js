import Logo from './components/Logo';
import Menu from './components/Menu'

import './App.css';
import Copy from './components/Copy';
import Tarjeta from './components/Tarjeta';
import img1 from './images/pic01.jpg'
import img2 from './images/pic02.jpg'
import img3 from './images/pic03.jpg'
import img4 from './images/pic04.jpg'
import img5 from './images/pic05.jpg'
import img6 from './images/pic06.jpg'
import img7 from './images/pic07.jpg'
import PaletaColores from './components/PaletaColores';
import Texto from './components/Texto';
import Links from './components/Links';


const images = {
  img4: img4,
  img5: img5,
  img6: img6,
  img7: img7
}
const links = [
  {
    href: 'https://www.google.com.co/',
    text: "google",
  },
  {
    href: 'www.google.com',
    text: "google",
  },
  {
    href: 'www.google.com',
    text: "google",
  },
  {
    href: 'www.google.com',
    text: "google",
  },
]

const content = `Lorem Ipsum is that it has or randomised words which don't look even slightly believable. If you are going to Ipsum is that it has or randomised words which don't look even slightly believable. If you are going to Lorem Ipsum is that it has or randomised words which don't look even slightly believable. If you are going to Ipsum is that it has or randomised words which don't look even slightly believable. If you are going to  Lorem Ipsum is that it has or randomised words which don't look even slightly believable. If you are going to Ipsum is that it has or randomised words which don't look even slightly believable. If you are going to </br> 
</br> Lorem Ipsum is that it has or randomised words which don't look even slightly believable. If you are going to Ipsum is that it has or randomised words which don't look even slightly believable. If you are going to`

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
        <div className="content-2-1">
          <PaletaColores srcImg={images} title={"Intereting stuff"} />

          <Texto title={"So What's this all about?"} content={content} />
        </div>
      </div>
      <div className="content-3">
        <div className='content-3-1'>
        <Links links={links}/>
        <Logo />
        </div>

      </div>

    </div>
  );
}

export default App;

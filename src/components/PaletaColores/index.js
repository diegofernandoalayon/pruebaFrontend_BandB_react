import './paletacolores.css'
import folder from '../../images/folder.png'
export default function PaletaColores({srcImg,title}){

  return (
    <div className="paleta">
      <h4 className='titulo-paleta'>{title}</h4>
      <div className='colores-paleta'>
        <img src={srcImg.img4} title={title} alt="color"/>
        <img src={srcImg.img5} title={title} alt="color"/>
        <img src={srcImg.img6} title={title} alt="color"/>
        <img src={srcImg.img7} title={title} alt="color"/>
      </div>
      <button className="btn-paleta"> <img src={folder} alt='More info'/>More</button>
    </div>
  )
}
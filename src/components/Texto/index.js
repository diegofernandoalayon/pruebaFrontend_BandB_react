import './texto.css'
import next  from '../../images/next.png'
export default function Texto({title, content}){

  return (
    <div className='texto'>
      <h2>{title}</h2>
      {content.map(parrafo=><p>{parrafo}</p>)}
      <button className="btn-texto"><img src={next} alt='leer mas'/>Continue Reading</button>
    </div>
  )
}
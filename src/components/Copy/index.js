import './copy.css'
import next from '../../images/next.png'
import moreInfo from '../../images/question.png'
export default function Copy(){
  return(
    <div className='copy'>
      <div className='copy-text'>
        <h2>Hi. This is Lorem.</h2>
        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
      </div>
      <div className="copy-btn">
        <button className='btn btn-primario'>OK let's go<img src={next} alt='sigue'/></button>
        <button className='btn btn-secundario'>More info <img src={moreInfo} alt='mas info'/></button>
      </div>
    </div>
  )
}
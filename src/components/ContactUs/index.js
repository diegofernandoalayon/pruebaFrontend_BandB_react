import './contactUs.css'

import instagram from '../../images/instagram.png'
import facebook from '../../images/facebook.png'
import pinterest from '../../images/pinterest.png'
import twitter from '../../images/twitter.png'


export default function Contact(){

  return(
    <div className="contact">
      <h3>Contact Us</h3>
      <ul className ='link-list '> 
        <li className='social'>
          <img src={instagram} alt="instagram"/>
          <img src={facebook} alt="facebook"/>
          <img src={pinterest} alt="pinterest"/>
          <img src={twitter} alt="twitter"/>
        </li>
        <li>auu</li>
        <li>auu</li>
        <li>auu</li>
      </ul>
    </div>
  )
}
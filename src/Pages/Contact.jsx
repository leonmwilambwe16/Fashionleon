import '../Pages/Contact.css'
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";

function Contact ()  {
  return (
    <div className='contact-container'>
       <div className="box">
          <h4>SUBSCRIBE TO GET 10% OFF</h4>
          <p>voluptate velit esse cillum dolore eu fugiat nulla</p>
          <div className="subscribe">
          <form action="">
            <label htmlFor="">YOUR EMAL ADDRESS</label>
            <input type="text" />
          </form>
          <button>Subscribe</button>
          </div>
          
       </div>
       <div className="box">
        <h4>MENU</h4>
        <ul>
          <li>Home v1</li>
          <li>About</li>
          <li>Contact</li>
          <li>Products</li>
        </ul>
       </div>
       <div className="box">
         <h4>FOLOW US</h4>
         <a href=""><FaFacebookF /></a>
         <a href=""><AiFillInstagram /></a>
         <a href=""><BsTwitterX /></a>
         <a href=""><FaLinkedinIn /></a>
         <a href=""><IoLogoWhatsapp /></a>
         <a href=""><FaYoutube /></a>
       </div>
      
    </div>
  )
}

export default Contact
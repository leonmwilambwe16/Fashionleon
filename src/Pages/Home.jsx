import { Link } from 'react-router-dom'
import '../Pages/Home.css'
import image from '../assets/suitewinter.jpg'

function Home () {
  return (
    <div className='home-container'>
      <hr className='line-bar' />
      <div className="text-home-block">
       <div className="text-home">
        <h1>SAVE UP TO 50% IN OUR <br />WINTER SALE</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />quis nostrud exercitation ullamco</p>
       </div>
       <div className="button-home">
       <button className='explore-btn'> EXPLORE PRODUCTS</button>
        <button className='winter-btn'>WINTER COLLECTION</button>
       </div>
      </div>
      <div className="picture-home-block">
        
      </div>
      
    </div>
  )
}

export default Home   








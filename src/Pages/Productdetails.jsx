import { useParams } from 'react-router-dom'
import '../Pages/Productdetails.css'
import { Dataproduct } from '../Dataproduct'
import { useContext } from 'react';
import { Cartcontext } from '../context/Context';

function Productdetails (){
  const {id} = useParams();

  const {handeleCount}= useContext(Cartcontext)

const product = Dataproduct.find((prod)=>prod.id === parseInt(id));

if(!product){
  return <div>Product not found</div>
}

  return (
    <div className='container'>
       <div className="container-box-details">
       <div className="prod-container-details1">
        <div className="pict1">
          <img src={product.stylish} alt="" />
        </div>
        <div className="pict1">
        <img src={product.poster} alt="" />
        </div>
       </div>
       <div className="prod-container-details">
           <div className='image-details-container'>
             <img src={product.picture} alt="" />
           </div>
           <div className='details-button-price'>
            <div className="price-btn">
            <p>${product.price}</p>
            <button className='addbtn-context' onClick={handeleCount}>Add</button>
            </div> 
             <div className='textdescript'>
               <p>{product.description}</p>
             </div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Productdetails
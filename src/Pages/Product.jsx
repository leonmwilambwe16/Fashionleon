import '../Pages/Product.css'
import { Dataproduct } from '../Dataproduct'
import { FaRegEye } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cartcontext } from '../context/Context';
import { useContext } from 'react';

function Product  () {

  const [searchPro,setSerachProd] = useState('')
  const [selectedCategory,setSelectedCategory] = useState('')

    const {handeleCount}= useContext(Cartcontext)

  const handlesearch =(e)=>{
    const productitems = e.target.value
    setSerachProd(productitems)
  };

  const filteredProducts = Dataproduct.filter(item=>{
    if(selectedCategory){
      return item.category === selectedCategory;
    }
    return true;
  });


  return (
    <div className="product-page-container">
      <div className='product-filter-select'>
      <button onClick={()=>setSelectedCategory('')}>All</button>
        <button onClick={()=>setSelectedCategory('suite')}>Suites</button>
        <button onClick={()=>setSelectedCategory('shoes')}>Shoes</button>
        <button onClick={()=>setSelectedCategory('tie')}>Ties</button>
        <button onClick={()=>setSelectedCategory('watch')}>Watchs</button>
      </div>
    <div className='product-page'>
      {filteredProducts.map((item,index)=>{
        return(
          <div className="items" key={index}>
            <div className="picturecontainer">
            <img src={item.picture} alt="" />
            </div>
            <div className="title-part">
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            </div>
            <div className="button-product">
             <FaCirclePlus  className='button-cart' onClick={handeleCount} />
             <Link to={`/productdetails/${item.id}`}><FaRegEye className='button-cart' /></Link>
              
            </div>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Product   


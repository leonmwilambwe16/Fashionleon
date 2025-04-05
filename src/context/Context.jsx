import { createContext,useState } from "react";



export const Cartcontext = createContext();

export const CartProvider =({children})=>{
  const [countprod, setCountprod] = useState(0)
  const handeleCount =()=>{
    setCountprod(countprod + 1)
   }
  


  return(
    <Cartcontext.Provider value={{countprod,handeleCount}}>
      {children}
    </Cartcontext.Provider>
  )

  
}
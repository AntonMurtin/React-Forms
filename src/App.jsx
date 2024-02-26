import { useState } from 'react'
import './App.css'
import CreateProduct from './components/create/CreateProduct'
import CreateUser from './components/create/CreateUser'
import ProductCard from './components/cardComponents/detailsCard/ProductCard';

function App() {
const [showUser, setShowUser]=useState(false);
const [showProduct, setShowProduct]=useState(false);
const [showFormUser, setShowFormUser]=useState(false);
const [showFormProduct, setShowFormProduct]=useState(false);


const [productData, setProductData]=useState([]);
const [userData, setUserData]=useState([])


const onUser=()=>{
setShowFormProduct(false);
setShowFormUser(true)
}
const onCloseUser=()=>{
  setShowFormUser(false)
}

const onProduct=()=>{
  setShowFormUser(false)
  setShowFormProduct(true);
}
const onCloseProduct=()=>{
  setShowFormProduct(false)
}

const onCreateProduct=(data)=>{
setProductData(data)
setShowProduct(true);
setShowFormProduct(false);
}

const onRemove=()=>{
  setShowProduct(false)
}

  return (
    <>
     <div className="navbar">
      <div className="menu">
    <ul>
      <li onClick={onUser} ><p>create user</p></li>
      <li onClick={onProduct} ><p>create product</p></li>
    </ul>
      </div>
     </div>
     <div className="content">
     </div>
     {showFormUser && <CreateUser onClose={onCloseUser}/>}
     {showFormProduct && <CreateProduct 
     onCreateProduct={onCreateProduct} 
     onClose={onCloseProduct}/>}
     {showProduct && <ProductCard 
     product={productData}
     onRemove={onRemove}
     />}
    </>
  )
}

export default App

import React from 'react'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'

const SingleProductCard = () => {

  const navigate = useNavigate()

    const {id} = useParams()

const [singleCard  , setSingleCard] = useState("")

console.log('singleCard' , singleCard);

const BaseUrl = `https://fakestoreapi.com/products/`

  useEffect(() => {
    return async() => {
        try{
            let response = await fetch(`${BaseUrl}${id}`)
            let data = await response.json()
            console.log('response' , data);
            setSingleCard(data)
          }
          catch(error){
            console.log(error);
          }
    }
  }, [ ])

  return (
    <div>
      <h1 className="headtext">This is Single Product Component</h1>
      <ProductCard value={singleCard}/>
      <div>
      <button className='btn' onClick={() => navigate("/shop")}>Back to Shop</button>
      </div>
    </div>
  )
}

export default SingleProductCard

import React from 'react'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProductCard = () => {

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
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-64 object-cover object-right-top"
            src={singleCard.image}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
              {singleCard.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
            {singleCard.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleProductCard

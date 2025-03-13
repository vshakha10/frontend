import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Recipes() {

  const { id } = useParams();

  const [post, setPost] = useState("");

  console.log(post);

  useEffect(() => {
    return async () => {
      try 
      {
        let response = await fetch(`https://dummyjson.com/recipes/${id}`);
        let data = await response.json();
        setPost(data);
      } 
      catch (error) 
      {
        console.log(error);
      }
    };
  }, [])

  return (
    <div>
      <h1>Id: {id}</h1>
      <h2>Recipe Name: {post.name}</h2>
      <h2>Ingredients: {post.ingredients}</h2>
      <h2>instructions: {post.instructions}</h2>
      <h2>prepTimeMinutes: {post.prepTimeMinutes}</h2>
      <h2>cookTimeMinutes: {post.cookTimeMinutes}</h2>
      <h2>servings: {post.servings}</h2>
      <h2>difficulty: {post.difficulty}</h2>
      <h2>cuisine: {post.cuisine}</h2>
      <h2>caloriesPerServing: {post.caloriesPerServing}</h2>
      <h2>tags: {post.tags}</h2>
      <h2>image: {post.image}</h2>
      <h2>rating: {post.rating}</h2>
      <h2>reviewCountating: {post.reviewCount}</h2>
      <h2>mealType: {post.mealType}</h2>
    </div>
  )
}

export default Recipes;

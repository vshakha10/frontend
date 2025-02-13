import React from 'react'

function Recipe({drinkers}) {
  return (
    <div>
      <ol>
        <li>Boil {drinkers} cups of water.</li>
        <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
        <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
      </ol>
    </div>
  )
}

export default Recipe

import { useEffect } from "react"
import { useState } from "react"
import Card from "../Card/Card"

export default function Cards() {
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetch('./recipes.json')
        .then(res => res.json())
        .then(data =>setRecipes(data.recipes))
    },[])

  return (
    <div className="md:w-2/3 mt-8">
       <div className="grid grid-cols-2 gap-5">       
        {
            recipes.map(recipe => <Card key={recipe.recipe_id} recipe={recipe}></Card>)
        }
        </div> 
      
    </div>
  )
}

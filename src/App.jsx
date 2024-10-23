import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Cards from './Components/Cards/Cards'
import Navbar from './Components/Navbar'
import OurRecipes from './Components/OurRecipes'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);


  const handleRecipe = (recipe) => {
    const doesExists = recipeQueue.find(prevRes => prevRes.recipe_id === recipe.recipe_id);
    if(!doesExists){
      setRecipeQueue([...recipeQueue, recipe])
    }else{
      alert('This recipe already exists in the queue!')
    }

  }
  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <OurRecipes></OurRecipes>
     <div className='md:flex justify-between'>
      <Cards handleRecipe={handleRecipe}></Cards>
      <Sidebar recipeQueue={recipeQueue}></Sidebar>
     </div>
    </>
  )
}

export default App

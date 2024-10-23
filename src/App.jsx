import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Cards from './Components/Cards/Cards'
import Navbar from './Components/Navbar'
import OurRecipes from './Components/OurRecipes'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [prepareRecipe, setPrepareRecipe] = useState([]);



  const handleRecipe = (recipe) => {
    const doesExists = recipeQueue.find(prevRes => prevRes.recipe_id === recipe.recipe_id);
    if (!doesExists) {
      setRecipeQueue([...recipeQueue, recipe])
    } else {
      alert('This recipe already exists in the queue!')
    }

    
  }
  const handleRemove = (id) => {
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)

    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updatedQueue)
    setPrepareRecipe([...prepareRecipe, deletedRecipe])
  }
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <div className='md:flex justify-between'>
        <Cards handleRecipe={handleRecipe}></Cards>
        <Sidebar prepareRecipe={prepareRecipe} handleRemove={handleRemove} recipeQueue={recipeQueue}></Sidebar>
      </div>
    </>
  )
}

export default App

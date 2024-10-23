import './App.css'
import Banner from './Components/Banner'
import Cards from './Components/Cards/Cards'
import Navbar from './Components/Navbar'
import OurRecipes from './Components/OurRecipes'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <OurRecipes></OurRecipes>
     <div className='md:flex justify-between'>
      <Cards></Cards>
      <Sidebar></Sidebar>
     </div>
    </>
  )
}

export default App

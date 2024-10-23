export default function Sidebar( {recipeQueue} ) {
  return (
    <div className="md:w-1/3 my-8  ml-6 border-2 rounded-2xl">
      <h3 className="text-center text-xl my-4 ">Want to cook : {recipeQueue.length}</h3>
      <div className="px-3">
        <hr/>
      </div>
      <div>
      {/* Table 1 */}
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
          recipeQueue.map((recipe, idx)=> <tr key={idx}>
        <td>{idx + 1}</td>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
        <td colSpan='2'> 
          <button className="btn bg-[#0BE58A] rounded-3xl">Preparing</button>
        </td>
      </tr>)
      }
    </tbody>
  </table>

  <h3 className="border-y py-4 text-center text-xl my-4 ">Preparing : 0000</h3>

  {/* Table 2 */}
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {/* {
          recipeQueue.map((recipe, idx)=> <tr key={idx}>
        <td>{idx + 1}</td>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
        <td colSpan='2'> 
          <button className="btn bg-[#0BE58A] rounded-3xl">Preparing</button>
        </td>
      </tr>)
      } */}
    </tbody>
  </table>
</div>
    </div>
  )
}

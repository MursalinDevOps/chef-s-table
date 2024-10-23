export default function Sidebar({ recipeQueue, handleRemove, prepareRecipe, calculations, totalTime, totalCalories }) {
  return (
    <div className="md:w-1/3 my-8  ml-6 border-2 rounded-2xl">
      <h3 className="text-center text-xl my-4 ">Want to cook : {recipeQueue.length}</h3>
      <div className="px-3">
        <hr />
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
              recipeQueue.map((recipe, idx) => <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td colSpan='2'>
                  <button
                    onClick={() => {
                      handleRemove(recipe.recipe_id)
                      calculations(recipe.preparing_time, recipe.calories)
                    }}
                    className="btn bg-[#0BE58A] rounded-3xl">Preparing</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>

        <h3 className="border-y py-4 text-center text-xl my-4 ">Preparing : {prepareRecipe.length}</h3>

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
            {
              prepareRecipe.map((recipe, idx) => <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{recipe.recipe_name} </td>
                <td>{recipe.preparing_time} min</td>
                <td>{recipe.calories} calories</td>
              </tr>)
            }

            {/* Sum */}
            <tr className="border-none">
              <td></td>
              <td></td>
              <td>Total time : <span className="font-bold text-green-700">{totalTime} Minutes</span></td>
              <td>Total Calories : <span className="font-bold text-green-700">{totalCalories} Calories </span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

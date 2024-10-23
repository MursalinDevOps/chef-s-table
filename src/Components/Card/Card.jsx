export default function Card({ recipe }) {
    console.log(recipe)
    const { recipe_id, recipe_image, recipe_name, short_description, ingredinets, calories, preparing_time } = recipe;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                {/* <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure> */}
                <div className="card-body">
                    <h2 className="card-title">
                        {recipe_name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{short_description}</p>
                    <hr />
                    <h3 className="text-xl">
                        Ingredients:
                    </h3>
                    <hr />
                    {/*  */}
                    <div className="flex">
                        <p className="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg><span>{preparing_time}</span>
                        </p>
                        <p className="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                        </svg>
                            <span>{calories}</span> </p>
                    </div>


                    {/* <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

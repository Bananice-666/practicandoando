import { Link } from "react-router-dom"

export const Planet = ({ id, name, image }) => {
    return (
        <div className="w-full h-full bg-slate-800 *:text-white pt-20 border-t-2 border-green-300">
            <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center text-center ">
                <label className="text-6xl mb-20" htmlFor="">{name}</label>
                <Link to={`/planets/details/${id}`}>
                    <div className="col-span-2 w-1/2 xl:col-span-1 md:col-span-2 mx-auto border-solid rounded-full overflow-hidden mb-20">
                        <img className="" src={image} alt="" />
                    </div>
                </Link>
            </div>
        </div>
    )
}


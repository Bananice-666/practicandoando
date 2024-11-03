import { Link } from "react-router-dom"

export const CardTransformation = ({ id, name, ki, image }) => {
    return (
        <div className="w-full h-full bg-slate-800 *:text-white pt-20 border-t-2 border-green-300 m-0 p-0">
            <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center text-center ">
                <label className="text-6xl mb-20 xl:col-span-2 md:col-span-2 col-span-2 font-bold" htmlFor="">{name}</label>
                <label className="text-6xl mb-20" htmlFor="">KI: {ki}</label>
                <Link className="col-span-2 xl:col-span-1 md:col-span-1" to={`/tranformation/details/${id}`}>
                    <div className="w-1/2 xl:col-span-1 md:col-span-1 mx-auto border-solid overflow-hidden mb-20">
                        <img className="h-[80vh] mx-auto" src={image} alt="" />
                    </div>
                </Link>
            </div>
        </div>
    )
}


import { Link } from "react-router-dom"

export const CardCharacters = ({ nombre, image, id }) => {

    return (

        <div className="w-full h-full bg-slate-800 *:text-white pt-20 border-t-2 border-green-300 m-0 p-0 grid-cols-1">
            <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center text-center ">
                <label className="text-6xl mb-20 xl:col-span-1 md:col-span-1 col-span-1 font-bold" htmlFor="">{nombre}</label>
                    <div className="col-span-1 w-1/2 xl:col-span-1 md:col-span-1 mx-auto border-solid overflow-hidden mb-20 ">
                    <Link to={`/character/details/${id}`}>
                        <img className="h-[80vh] mx-auto " src={image} alt="" />
                        </Link>
                    </div>

            </div>
        </div>
    )
}

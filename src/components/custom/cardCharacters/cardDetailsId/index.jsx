
export const CardDetailId = ({ name, image, description, race, id, ki, planet, planetImage }) => {
    return (
        <div className="w-full h-full bg-slate-800 *:text-white pt-20 border-t-2 border-green-300">
            <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center text-center ">
                <label className="text-6xl mb-20 col-span-2 font-mono" htmlFor="">{name}</label>
                <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 row-span-2 text-center items-center ">
                    <label className="text-2xl  " htmlFor="">race: </label>
                    <label className="text-6xl m-10 font-mono md:text-start" htmlFor="">{race}</label>
                    <label className="text-2xl " htmlFor="">KI: </label>
                    <label className="text-5xl m-10 font-mono md:text-start" htmlFor="">{ki}</label>
                </div>
                <div className="row-span-2 col-span-2 xl:col-span-1 md:col-span-2 mx-auto border-solid overflow-hidden mb-20">
                    <img className="xl:w-[40vh] w-[40vh]" src={image} alt="" />
                </div>

                <div className="col-span-2 w-5/6 text-center items-center mx-auto mb-28">
                <small className="font-mono text-2xl text-center items-center mx-auto">{description}</small>

                </div>

                <div className="col-span-2 xl:col-span-2 md:col-span-2 grid grid-cols-2 text-center items-center">
                    <label className="text-2xl col-span-2 xl:col-span-2 md:col-span-2 font-mono font-bold" htmlFor="">planet:</label>

                    <label className="text-6xl col-span-2 xl:col-span-1 md:col-span-1 mt-6" htmlFor="">{planet}</label>
                    <div className="mt-16 w-1/2 col-span-2 xl:col-span-1 md:col-span-1 mx-auto border-solid rounded-full overflow-hidden mb-20">
                        <img className="" src={planetImage} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}


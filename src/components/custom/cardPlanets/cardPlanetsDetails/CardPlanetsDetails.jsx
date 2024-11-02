
export const CardPlanetsDetails = ({ name, description, image, characters }) => {
    return (

        <div className="w-full h-full bg-slate-800 *:text-white border-t-2 border-green-300">
            <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center">

                <div className="font-mono grid col-span-2 text-center mb-20 mt-20 font-bold ">
                    <label htmlFor="">planeta</label>
                    <label className="text-7xl" htmlFor="">{name}</label>
                </div>

                <div className="col-span-2 w-1/2 xl:col-span-1 md:col-span-2 mx-auto border-solid rounded-full overflow-hidden mb-20">
                    <img className="" src={image} alt="" />
                </div>
                <div className="font-serif text-3xl col-span-1 text-center mx-10 ">
                    <small>{description}</small>
                </div>
            </div>

            <div className="grid grid-cols-1 items-center text-center mt-32">
                <h2 className=" font-mono font-bold mb-10 pt-10 border-t-4 tracking-widest  border-green-700">HABITANTES</h2>
                {characters.map((character) => (
                    <div key={character.id} className="p-4 border-t-4  border-green-300">
                        <h3 className="text-4xl font-thin">{character.name}</h3>
                        <img className="w-84 items-center mx-auto p-20 h-[80vh]" src={character.image} alt={character.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

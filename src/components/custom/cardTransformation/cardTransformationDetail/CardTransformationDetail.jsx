export const CardTransformationDetail = ({ name, image, ki, transformations }) => {
    return (

        <div className="w-full h-full bg-slate-800 *:text-white border-t-2 border-green-300">
            <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center">
                <div className="font-mono grid col-span-2 text-center mt-20 font-bold -mb-10">
                    <label htmlFor="">PERSONAJE</label>

                </div>
                <div className="font-mono grid col-span-2 text-center mb-20 mt-20 font-bold ">
                    <label htmlFor="">nombre</label>
                    <label className="text-7xl" htmlFor="">{name}</label>
                </div>

                <div className="col-span-2  xl:col-span-2 md:col-span-2 mx-auto border-solid overflow-hidden mb-20">
                    <img className="xl:w-[40vh] w-[40vh]" src={image} alt="" />
                </div>
            </div>

            <div className="grid grid-cols-1 items-center text-center mt-32">
                <h2 className=" font-mono font-bold mb-10 pt-10 border-t-4 tracking-widest  border-green-700">TRANSFOMRACIONES</h2>
                {transformations.map((transformations) => (
                    <div key={transformations.id} className="p-4 border-t-4 mb-10 border-green-300">
                        <h3 className="text-4xl font-thin">{transformations.name}</h3>
                        <img className="w-84 items-center mx-auto p-20 h-[80vh] -mb-10" src={transformations.image} alt={transformations.name} />
                        <label className="text-3xl" htmlFor="">KI: {ki}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

import { GiDragonBalls } from "react-icons/gi"
import { Link } from "react-router-dom"


export const Navbar = () => {
    return (
        <nav className="border-b-4 border-black border-dashed">
            <div className="grid xl:grid-cols-2 md:grid-cols-1 h-full">
                <div className="">
                    <Link className="flex font-oswald items-center xl:h-20 md:h-16 h-20 xl:w-1/3 " to={"/"}>
                        <GiDragonBalls className="h-full w-auto -ml-2" />
                        <span className="text-4xl">DRAGON BALL</span>
                    </Link>
                </div>

                <div className="text-center font-oswald grid lx:grid-cols-3 grid-cols-1 mx-20  md:grid-cols-3 items-center xl:h-20 md:h-16 text-2xl h-44 ">
                    <Link className="hover:bg-red-600 border-black border-l-2 pl-1" to={"/"}>PERSONAJES</Link>
                    <Link className="hover:bg-red-600 border-black border-l-2 pl-1" to="/planets">PLANETAS</Link>
                    <Link className="hover:bg-red-600 border-black border-l-2 pl-1 " to="/transformation">TRANSFORMACIONES</Link>
                </div>
            </div>
        </nav>
    )
}

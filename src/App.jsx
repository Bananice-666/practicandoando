import { BrowserRouter } from "react-router-dom"
import { Characters } from "./pages/characters"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Planets } from "./pages/planets"
import { Transformation } from "./pages/transformation"
import { Navbar } from "./layout/navbar/navbar"



function App() {
    return(
        <>
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Characters/>}/>
                    <Route path="/planets" element={<Planets/>}/>
                    <Route path="/transformation" element={<Transformation/>}/>
                </Routes>

            </BrowserRouter>
        </>
    )


}

export default App

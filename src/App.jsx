import { BrowserRouter } from "react-router-dom"
import { Characters } from "./pages/characters"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Planets } from "./pages/planets"
import { Transformation } from "./pages/transformation"
import { Navbar } from "./layout/navbar"
import { DetailsId } from "./pages/characters/detailsId"

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Characters />} />
                    <Route path="/character/details/:id" element={<DetailsId />} />
                    <Route path="/planets" element={<Planets />} />
                    <Route path="/transformation" element={<Transformation />} />
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    )


}

export default App

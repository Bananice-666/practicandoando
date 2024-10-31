import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Navbar } from "./layout/navbar"
import { DetailsId } from "./pages/characters/detailsId/characterDetailsIdPage"
import { PlanetsDetailsPage } from "./pages/planets/planetsDetails/planetsDetailsPage"
import { TransformationDetailPage } from "./pages/transformation/transformationDetail/transformationDetailPage"
import { TransformationPage } from "./pages/transformation/transformationPage"
import { PlanetsPage } from "./pages/planets/planetsPage"
import { CharactersPage } from "./pages/characters/characterPage"

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<CharactersPage />} />
                    <Route path="/character/details/:id" element={<DetailsId />} />
                    <Route path="/planets" element={<PlanetsPage />} />
                    <Route path="/planets/details/:id" element={<PlanetsDetailsPage/>}/>
                    <Route path="/transformation" element={<TransformationPage />} />
                    <Route path="/tranformation/details/:id" element={<TransformationDetailPage/>}/>
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

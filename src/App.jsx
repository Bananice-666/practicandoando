import { BrowserRouter } from "react-router-dom"
import { Characters } from "./pages/characters"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Planets } from "./pages/planets"

function App() {
    return(<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Characters/>}/>
                <Route path="/planets" element={<Planets/>}/>
            </Routes>

        </BrowserRouter>
    </>)


}

export default App

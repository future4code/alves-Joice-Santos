import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import DiadeSortePage from "../pages/DiadeSortePage/DiadeSortePage"
import LotofacilPage from "../pages/LotofacilPage/LotofacilPage"
import LotomaniaPage from "../pages/LotomaniaPage/LotomaniaPage"
import MegasenaPage from "../pages/MegasenaPage/MegasenaPage"
import QuinaPage from "../pages/QuinaPage/QuinaPage"
import TimemaniaPage from "../pages/TimemaniaPage/TimemaniaPage"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path="diadesorte" element={<DiadeSortePage/>} />
                <Route path="lotofacil" element={<LotofacilPage/>} />
                <Route path="lotomania" element={<LotomaniaPage/>} />
                <Route path="megasena" element={<MegasenaPage/>} />
                <Route path="quina" element={<QuinaPage/>} />
                <Route path="timemania" element={<TimemaniaPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
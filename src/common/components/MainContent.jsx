import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from "../../pages/home/HomePage"
import DetailPage from "../../pages/detail/DetailPage"

const MainContent = () => {
    return (
        <Router>
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="/detail/:country" element={<DetailPage />} />
            </Routes>
        </Router>
    )
}

export default MainContent
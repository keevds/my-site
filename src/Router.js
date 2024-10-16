import Home from "./Routes/Home";
import History from "./Routes/History";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<History />} />
            </Routes>
        </Router>
    );
}

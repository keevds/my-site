import Home from "./Routes/Home";
import History from "./Routes/History";
import Links from "./Routes/Links";

import { Routes, Route } from "react-router-dom";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<History />} />
            <Route path="/links" element={<Links />} />
        </Routes>
    );
}

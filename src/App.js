import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import AppRoutes from "./Router";
import { useLocation } from "react-router-dom";

export default function App() {
    const location = useLocation();
    const ExcludeHeaderFooterRoutes = ["/links"];

    const shouldExcludeHeaderFooter = ExcludeHeaderFooterRoutes.includes(
        location.pathname
    );

    return (
        <div>
            {!shouldExcludeHeaderFooter && <Header />}
            <div class="container lg:mx-auto px-12">
                <div class="flex flex-col items-center">
                    <AppRoutes />
                </div>
            </div>
            {!shouldExcludeHeaderFooter && <Footer />}
        </div>
    );
}

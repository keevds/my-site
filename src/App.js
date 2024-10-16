import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import AppRoutes from "./Router";

export default function App() {
    return (
        <div>
            <Header />
            <div class="container lg:mx-auto px-12">
                <div class="flex flex-col items-center">
                    <AppRoutes />
                </div>
            </div>
            <Footer />
        </div>
    );
}

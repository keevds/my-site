import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Study from "./Components/Study";
import Footer from "./Components/Footer";

export default function App() {
    return (
        <div>
            <Header />
            <div class="container lg:mx-auto px-12">
                <div class="flex flex-col items-center">
                    <About />
                    <Study />
                </div>
            </div>
            <Footer />
        </div>
    );
}

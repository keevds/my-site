import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";

export default function App() {
    return (
        <div>
            <Header />
            <div class="container mx-auto px-12">
                <About />
            </div>
        </div>
    );
}

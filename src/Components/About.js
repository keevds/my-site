import { FaInstagram } from "react-icons/fa6";
import foto from "../Styles/foto-kevin.jpg";

export default function About() {
    return (
        <div class="inline items-center justify-center mt-10 s:mb-20 s:mt-32 s:flex">
            <img
                src={foto}
                alt="Foto Kevin"
                class="w-64 h-64 mr-8 rounded-md"
            />

            <div>
                <h1 class="text-3xl pb-2">
                    Olá, sou o{" "}
                    <mark class="text-pink-600 bg-transparent">Kevin</mark>
                </h1>
                <p class="max-w-sm md:max-w-xl pb-2">
                    Trabalho como designer com 5 anos de experiência, e
                    atualmente estou me dedicando ao estudo de C# e .NET para
                    fazer uma transição na minha carreira. Estou animado para
                    aplicar minhas experiências anteriores e habilidades
                    adquiridas nesta nova fase profissional. Estou sempre em
                    busca de novos desafios e aprendizados!
                </p>
                <button
                    class="flex items-center w-fit h-fit pl-4 pr-10 py-2.5 text-neutral-300 bg-neutral-800 border 
                    border-neutral-700 rounded-md hover:border-pink-600 transition ease-in-out"
                    type="submit"
                >
                    <a
                        class="flex"
                        href="https://www.instagram.com/kevinbbarbosa/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram class="size-7 pr-2" />
                        Instagram
                    </a>
                </button>
            </div>
        </div>
    );
}

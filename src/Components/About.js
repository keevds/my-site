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
                    Olá, me chamo{" "}
                    <mark class="text-pink-600 bg-transparent">Kevin</mark>
                </h1>
                <p class="max-w-sm md:max-w-xl pb-2">
                    Sou designer gráfico com 5 anos de experiência e atualmente
                    estou cursando o{" "}
                    <b>
                        1º semestre de Análise e Desenvolvimento de Sistemas na
                        Mackenzie.
                    </b>
                    Estou em busca da minha primeira oportunidade como
                    desenvolvedor, para aplicar as habilidades adquiridas ao
                    longo da minha trajetória no design e nesta nova fase de
                    aprendizado em tecnologia. Estou em busca de desafios que me
                    permitam crescer profissionalmente e contribuir de forma
                    significativa.
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

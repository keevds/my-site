import { FaInstagram } from "react-icons/fa6";

export default function About() {
    return (
        <div class="flex justify-between">
            <div>
                <h1 class="text-4xl">
                    Olá, sou o{" "}
                    <mark class="text-lime-400 bg-transparent">Kevin</mark>
                </h1>
                <p class=" max-w-lg">
                    Trabalho como designer com 5 anos de experiência, e
                    atualmente estou me dedicando ao estudo de C# e .NET para
                    fazer uma transição na minha carreira. Estou animado para
                    aplicar minhas experiências anteriores e habilidades
                    adquiridas nesta nova fase profissional. Estou sempre em
                    busca de novos desafios e aprendizados!
                </p>
                <button
                    class="flex items-center w-fit h-fit pl-4 pr-10 py-2.5 text-neutral-300 bg-neutral-800 border 
                    border-neutral-700 rounded-md hover:border-lime-400 transition ease-in-out"
                    type="submit"
                >
                    <FaInstagram class="size-7 pr-2" />
                    Instagram
                </button>
                {/* <div class="flex items-center w-fit h-fit pl-4 pr-10 py-2.5 bg-neutral-800 border border-neutral-700">
                    <FaInstagram class="size-7 pr-2" />
                    <button type="submit" href="">
                        Instagram
                    </button>
                </div> */}
            </div>
            <div class="bg-white w-64 h-64" />
        </div>
    );
}

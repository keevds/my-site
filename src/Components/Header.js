import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

import logo from "../Styles/Bake.svg";

export default function Header() {
    return (
        <div class="flex items-center justify-between mt-6 border-y border-neutral-800 h-20 px-6">
            <img src={logo} alt="Logo" class="size-20" />
            <nav
                class="hidden s:flex items-center justify-between pr-8 pl-8 space-x-4 w-60 h-12 border 
            border-neutral-800 rounded-full"
            >
                <a href="/">
                    <p class="hover:text-pink-600 transition ease-in-out">
                        Inicio
                    </p>
                </a>
                <a href="/">
                    <p class="hover:text-pink-600 transition ease-in-out">
                        Sobre
                    </p>
                </a>
                <a href="/">
                    <p class="hover:text-pink-600 transition ease-in-out">
                        Projetos
                    </p>
                </a>
            </nav>
            <div class="flex items-center space-x-2">
                <button
                    type="submit"
                    class="flex items-center justify-center size-12 border border-neutral-800 
                rounded-md hover:border-neutral-600 hover:bg-neutral-800 transition ease-in-out"
                >
                    <a
                        href="https://github.com/keevds"
                        className="Icone"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FaGithub class="size-6" />
                    </a>
                </button>
                <button
                    type="submit"
                    class="flex items-center justify-center size-12 border border-neutral-800 
                rounded-md hover:border-neutral-600 hover:bg-neutral-800 transition ease-in-out"
                >
                    <a
                        href="https://www.linkedin.com/in/kevinbbarbosa/"
                        className="Icone"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FaLinkedinIn class="size-6" />
                    </a>
                </button>
                <button
                    type="submit"
                    class="flex items-center justify-center size-12 border border-neutral-800 
                rounded-md hover:border-neutral-600 hover:bg-neutral-800 transition ease-in-out"
                >
                    <a href="mailto:kevinbbst@gmail.com" className="Icone">
                        <TbMailFilled class="size-6" target="_blank" />
                    </a>
                </button>
            </div>
        </div>
    );
}

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import foto from "../Styles/foto-kevin.jpg";
import kevin from "../Styles/kevin-site.png";

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Links() {
    return (
        <div class="flex flex-col items-center w-full mt-28">
            <img
                alt="Foto do Kevin"
                src={foto}
                class="bg-neutral-300 rounded-full content-center size-36 /border-solid border-4 border-neutral-300"
            />
            <h1 class="mt-4">Kevin Barbosa</h1>
            <div class="mb-6 flex w-fit justify-center space-x-2">
                <a
                    href="https://www.instagram.com/kevinbbarbosa/"
                    class="text-neutral-300 hover:text-pink-600 transition ease-in-out"
                    rel="noreferrer"
                    target="_blank"
                >
                    <FaInstagram class="size-6" />
                </a>
                <a
                    href="https://wa.me/21974283562"
                    class="text-neutral-300 hover:text-pink-600 transition ease-in-out"
                    rel="noreferrer"
                    target="_blank"
                >
                    <FaWhatsapp class="size-6" />
                </a>
                <a
                    href="mailto:kevinbbst@gmail.com"
                    class="text-neutral-300 hover:text-pink-600 transition ease-in-out"
                    rel="noreferrer"
                    target="_blank"
                >
                    <HiOutlineMail class="size-6" />
                </a>
            </div>
            <div class="min-w-96">
                <a
                    class="mb-4 flex items-center pl-4 h-20 text-neutral-300 bg-neutral-800 border 
                    border-neutral-700 rounded-full hover:border-neutral-300 hover:bg-neutral-700 transition ease-in-out"
                    href="https://github.com/keevds"
                    rel="noreferrer"
                    target="_blank"
                >
                    <FaGithub class="size-14" />
                    <p class="pl-2">Meu Github(projetos)</p>
                </a>
                <a
                    class="mb-4 flex items-center pl-4 h-20 text-neutral-300 bg-neutral-800 border 
                    border-neutral-700 rounded-full hover:border-neutral-300 hover:bg-neutral-700 transition ease-in-out"
                    href="https://www.linkedin.com/in/kevinbbarbosa/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <FaLinkedin class="size-14" />
                    <p class="pl-2">Meu Linkedin</p>
                </a>
                <a
                    class="mb-4 flex items-center pl-4 h-20 text-neutral-300 bg-neutral-800 border 
                    border-neutral-700 rounded-full hover:border-neutral-300 hover:bg-neutral-700 transition ease-in-out"
                    href="https://kevinbarbosa.net/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <img
                        src={kevin}
                        class="size-14 rounded-full bg-neutral-300"
                        alt="Imagem Kevin Barbosa"
                    />
                    <p class="pl-2">Meu Site</p>
                </a>
            </div>
        </div>
    );
}

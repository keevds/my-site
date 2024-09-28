import logo from "../Styles/Bake.svg";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

export default function Footer() {
    return (
        <div class="mt-6 border-t border-neutral-800 h-60 px-6">
            <div>
                <img src={logo} alt="Logo" class="size-20" />
                <p>Desenvolvido com React por mim mesmo (: </p>
                <div class="flex mt-4">
                    <a
                        href="https://github.com/keevds"
                        className="Icone"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FaGithub class="size-7 mr-4" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kevinbbarbosa/"
                        className="Icone"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FaLinkedinIn class="size-7 mr-4" />
                    </a>
                    <a href="mailto:kevinbbst@gmail.com" className="Icone">
                        <TbMailFilled class="size-7" target="_blank" />
                    </a>
                </div>
            </div>
        </div>
    );
}

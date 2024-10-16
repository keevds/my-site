import { DiJsBadge } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import csharp from "../Styles/Aspose Total Logo.svg";
import { SiMicrosoftazure } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Study() {
    return (
        <div class="md:flex my-20">
            <div class="s:grid s:grid-cols-2 s:gap-4 s:mr-8">
                <button
                    class="mb-2 s:mb-0 w-full flex items-center xl:w-60 pl-4 s:pr-20 h-14 text-neutral-300 bg-neutral-800 border 
                    border-neutral-700 rounded-md cursor-default"
                    type="submit"
                >
                    <DiJsBadge class="size-8 pr-2" />
                    Javascript
                </button>
                <button
                    class="mb-2 s:mb-0 w-full flex items-center xl:w-60 pl-4 s:pr-20 h-14 text-neutral-300 bg-neutral-800 border 
                    border-neutral-700 rounded-md cursor-default"
                    type="submit"
                >
                    <SiTypescript class="size-8 pr-2" />
                    Typescript
                </button>
                <button
                    class="mb-2 s:mb-0 w-full flex items-center xl:w-60 pl-4 s:pr-20 h-14 text-neutral-300 bg-neutral-800 border 
                    border-neutral-700 rounded-md cursor-default"
                    type="submit"
                >
                    <DiReact class="size-10 pr-2" />
                    React
                </button>
                <button
                    class="mb-2 s:mb-0 w-full flex items-center xl:w-60 pl-4 lg:pr-20 h-14 text-neutral-300 bg-neutral-800 border 
                    border-neutral-700 rounded-md cursor-default"
                    type="submit"
                >
                    <img src={csharp} alt="Logo C#" class="size-8 pr-2" />
                    C# / .Net
                </button>
                <button
                    class="mb-2 s:mb-0 w-full flex items-center xl:w-60 pl-4 s:pr-20 h-14 text-neutral-300 bg-neutral-800 border 
                    border-neutral-700 rounded-md cursor-default"
                    type="submit"
                >
                    <SiMicrosoftazure class="size-8 pr-2" />
                    Azure
                </button>
                <button
                    class="mb-2 s:mb-0 w-full flex items-center xl:w-60 pl-4 s:pr-20 h-14 text-neutral-300 bg-neutral-800 border 
                    border-neutral-700 rounded-md cursor-default"
                    type="submit"
                >
                    <BiLogoPostgresql class="size-8 pr-2" />
                    PostgreSQL
                </button>
            </div>
            <div class="mx-w-sm">
                <h1 class="text-3xl pb-2">
                    Tecnologias que eu
                    <br class="" /> estou{" "}
                    <mark class="text-pink-600 bg-transparent">estudando</mark>
                </h1>
                <p class="max-w-md">
                    Meu foco agora é em me aprimorar no <b>C# e .NET</b> e
                    entender todos os processos do back-end.
                </p>
            </div>
        </div>
    );
}

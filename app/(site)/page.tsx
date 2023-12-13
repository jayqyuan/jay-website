import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import EastIcon from '@mui/icons-material/East';
import About from "./components/About";

export default async function Home() {
	const projects = await getProjects();
	return (
		<main>
				<div id="home" className="mt-36">
				<h1 className='text-8xl font-bold dark:text-teal-400'>
						Hello, I&apos;m{" "} <span className='bg-gradient-to-r from-orange-400 via-purple-600 to-teal-400 bg-clip-text text-transparent'>Jay Yuan,
					</span>
				</h1>
				<h1 className=" text-4xl large:text-4xl font-extra dark:text-slate-200 mt-1" >
					and I am a full-stack developer.
				</h1>
				<button>
				<a href='#contact' className="text-2xl border-2 border-teal-500 rounded-lg p-1 hover:scale-105 hover:bg-teal-800 transition mt-36 flex item-center p-3">
					GET IN TOUCH
					<span className="ml-2">
						<EastIcon/>
					</span>
				</a>
				</button>
				</div>
				<About/>
				<div id="my-work">
				<h2 className='mt-36 font-bold text-gray-700 text-5xl dark:text-slate-200 mb-10' >WHAT I WORKED ON</h2>
				<div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project) => (
						<ProjectCard key={project._id} project = {project}/>
					))}
				</div>
				</div>
		</main>
	);
}

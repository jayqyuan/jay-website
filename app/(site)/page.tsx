import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";

export default async function Home() {
	const projects = await getProjects();
	return (
		<main>
				<div id="about-me" className="h-screen m-3">
				<h1 className='text-7xl  font-bold py-5'>
						Hello, I&apos;m{" "} <span className='bg-gradient-to-r from-orange-400 via-purple-600 to-teal-400 bg-clip-text text-transparent'>Jay Yuan,
					</span>
				</h1>
				<h1 className="text-2xl font-extra dark:text-slate-200 mt-1" >
					and I am a Full Stack/Software Developer
				</h1>
				</div>
				<h2 className='mt-24 font-bold text-gray-700 text-3xl dark:text-slate-200' id="my-work">My Projects</h2>
				<div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project) => (
						<ProjectCard key={project._id} project = {project}/>
					))}
				</div>
		</main>
	);
}

import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import { useState } from "react";
import Landing from "./components/Landing";

export default async function Home() {
	const projects = await getProjects();
	return (
		<main>
				<Landing/>
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



import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import Link from "next/link";

export default async function Home() {
	const projects = await getProjects();
	return (
		<main>
			<div>
				<div>
				<h1 className='text-7xl font-bold'>
					<span className='bg-gradient-to-r from-orange-400 via-purple-600 to-slate-400 bg-clip-text text-transparent'>
						Hello, I&apos;m{" "} Jay.
					</span>
					
				</h1>
				<h1 className="text-4xl font-extra dark:text-slate-200 mt-1" >
					I like to develop cool projects.
				</h1>
				<p className='mt-3 text-l text-gray-600 dark:text-slate-400'>
					Aspiring software engineer based in NYC, and recent coding bootcamp graduate. 
				</p>
				</div>
				<h2 className='mt-24 font-bold text-gray-700 text-3xl'>My Projects</h2>
				<div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project: Project) => (
						<Link
							href={`/projects/${project.slug}`}
							key={project._id}
							className='border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition'
						>
							{project.cover && (
								<Image
									src={project.cover}
									alt={project.name}
									width={750}
									height={300}
									className='object-cover rounded-lg border border-gray-500'
								/>
							)}
							<div className='mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
								{project.name}
							</div>
						</Link>
					))}
				</div>
			</div>
		</main>
	);
}

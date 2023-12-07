import Image from "next/image"
import Link from "next/link"
import { Project } from "@/types/Project"

export default function ProjectCard({project} : {project: Project}){
    const tech = project.tech
    console.log(tech)
    return (
    <Link href={`/projects/${project.slug}`} className='border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-teal-500 transition'>
        {project.cover && (
            <div className="relative w-full h-60 pb-2">
            <Image src={project.cover} alt={project.name} layout="fill" objectFit="contain" className='object-cover rounded-lg border border-gray-500 '
            />
            </div>
        )}
    <div className='m-2 font-extrabold text-xl dark:bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text dark:text-transparent'>
        {project.name}
    </div>
    <div className="flex flex-wrap">
        {tech != null? (
            tech.map((techItem, index)=>(
                <div key={index} className="m-2 border-2 border-slate-600 dark:border-teal-400 rounded-lg p-2 w-fit ">{techItem}</div>
            ))
        ):(<></>)}
        </div>
    
</Link>
)
}
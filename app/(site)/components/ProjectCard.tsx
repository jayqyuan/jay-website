import Image from "next/image"
import Link from "next/link"
import { Project } from "@/types/Project"

export default function ProjectCard({project} : {project: Project}){
    return (
    <Link href={`/projects/${project.slug}`} className='border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition'>
        {project.cover && (
            <Image src={project.cover} alt={project.name} width={750} height={300} className='object-cover rounded-lg border border-gray-500'
            />
        )}
    <div className='mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
        {project.name}
    </div>
</Link>
)
}
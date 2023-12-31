import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
	params: { project: string };
};

export default async function Project({ params }: Props) {
	const slug = params.project;
	// this is using project because the file name is project
	const project = await getProject(slug);

	return (
		<div>
			<header className='flex flex-col items-center justify-between sm:flex-row'>
				<h1 className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-7xl font-extrabold'>
					{project.name}
				</h1>
				<a
					href={project.url}
					title='View Project'
					target='_blank'
					rel='noopener noreferrer'
                    className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap dark:hover:bg-teal-500 hover:bg-teal-500 hover:text-pink-100 transition mt-4 sm:mt-0 sm:ml-4"
				>
					View Project
				</a>
			</header>
            {/* content section */}
            <div className="text-lg mt-5">
                <PortableText value={project.content}/>
            </div>

            <Image src={project.image} alt={project.name} width={1920} height={1080} className="mt-10 border-2 border-gray-700 object-cover rounded-xl"/>

            {/* image here */}
		</div>
	);
}

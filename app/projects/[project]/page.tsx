import { getProject } from "@/sanity/sanity-utils"


type Props = {
    params : {project: string}
}

export default async function Project({params}: Props){
    const slug = params.project
    // this is using project because the file name is project
    const project = await getProject(slug)

    return <div>{project.name}e</div>
}
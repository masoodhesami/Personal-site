import type {NextApiRequest, NextApiResponse} from 'next'
import projects from "../../core/services/jsonFiles/projectsData.json"

const {projectsData} = projects

type Project = {
    title: string,
    detail: string,
    imgUrl: string,
    githubUrl: string,
    viewUrl: string,
    tags: {
        name: string,
        color: string
    }[],
}[]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Project>
) {
    res.status(200).json(projectsData)
}

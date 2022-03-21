import type {NextApiRequest, NextApiResponse} from 'next'
import designData from "../../core/services/jsonFiles/designsData.json"
const {allDesigns} = designData;

type Design = {
    imageUrl: string,
    fullUrl: string,
    title: string
}[]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Design>
) {
    res.status(200).json(allDesigns)
}
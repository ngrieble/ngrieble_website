import { NextApiRequest, NextApiResponse } from 'next'
import { travelPostsByYear } from '@/data/travel-posts'
import {TravelPostByYear} from '@/types/travel'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<TravelPostByYear[]>
) {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    try {
        // await new Promise(resolve => setTimeout(resolve, 1000))
        return res.status(200).json(travelPostsByYear)
        // return res.status(500).end()
    } catch (error) {
        console.error('Error fetching travel posts:', error)
        return res.status(500).end()
    }
}

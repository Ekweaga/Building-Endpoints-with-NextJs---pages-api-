// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from "../../MongoDb/bdCoonection"
type Data = {
  name: string
}

const dbConnectionDetails ="mongodb+srv://hikay133:hDkH1wz57uKHHIZ@cluster0.y2kcbba.mongodb.net/?retryWrites=true&w=majority"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  res.status(200).json({ name: 'John Doe' })
}

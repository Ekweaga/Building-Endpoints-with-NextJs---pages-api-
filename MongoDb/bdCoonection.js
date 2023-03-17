


import { MongoClient } from 'mongodb'


const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise
const dbConnectionDetails ="mongodb+srv://hikay133:hDkH1wz57uKHHIZ@cluster0.y2kcbba.mongodb.net/?retryWrites=true&w=majority"

if (!dbConnectionDetails) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {

  client = new MongoClient(dbConnectionDetails, options)
  clientPromise = client.connect()
}

export default clientPromise

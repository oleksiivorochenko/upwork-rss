import { createConnection, Connection } from "typeorm"

const connectDb = async (): Promise<Connection> => {
  try {
    return await createConnection()
  } catch (error) {
    throw new Error(error)
  }
}

export { connectDb }
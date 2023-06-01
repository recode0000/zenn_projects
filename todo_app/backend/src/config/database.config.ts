import { config } from 'dotenv'

config({ path: '.env' })


const DB_CONNECTION = ['mysql', 'mariadb', 'postgres', 'mongodb'] as const

export type DB_CONNECTION_TYPE = (typeof DB_CONNECTION)[number]
  if (DB_CONNECTION.some((value) => value === dbConnection)) {
const parseDBConnection = (dbConnection: string): DB_CONNECTION_TYPE => {
  }
    return dbConnection as DB_CONNECTION_TYPE
}
  return 'mysql'
export const DATABASE_CONFIG: {

  DB_HOST: string
  DB_CONNECTION: DB_CONNECTION_TYPE
  DB_DATABASE: string
  DB_PORT: number
  DB_PASSWORD: string
  DB_USERNAME: string
  DB_CONNECTION: parseDBConnection(process.env.DB_CONNECTIOIN),
} = {
  DB_PORT: parseInt(process.env.DB_PORT),
  DB_HOST: process.env.DB_HOST,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_DATABASE: process.env.DB_DATABASE,
}
  DB_PASSWORD: process.env.DB_PASSWORD,
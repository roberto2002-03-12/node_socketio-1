 import { IEnvConfig } from '../models/env.model'

export const developtmentEnv: IEnvConfig = {
  PORT: parseInt(process.env.PORT ?? '3000'),
}
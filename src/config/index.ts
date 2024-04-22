import * as dotenv from 'dotenv';
import path from 'path';

// la configuración debe estar antes
dotenv.config({ path: path.join(__dirname, '../../.env') });

import { developtmentEnv } from './envs';

export default developtmentEnv;
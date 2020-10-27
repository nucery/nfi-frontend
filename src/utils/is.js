import { uaParser } from './ua-parser';

export const isWindows = uaParser.getOS().name === 'Windows';

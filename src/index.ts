#!/usr/bin/env node

import { existsSync } from 'fs';

const currentDir = process.cwd();
const packagePath = `${currentDir}/package.json`;

if (!existsSync(packagePath)) {
  console.error(`package.json can't be found in ${currentDir}`);
}

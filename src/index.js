// @ts-check
import fs from 'fs';
import path from 'path';

const getFilePath = (dirPath) => path.resolve(process.cwd(), dirPath, 'package.json');
const readFile = (dirPath) => fs.readFileSync(getFilePath(dirPath), 'utf-8');

const generators = {
  npmScripts: (config) => (
    Object.entries(config.scripts)
      .map(([Name, Command]) => ({ Name, Command }))
  ),
  npmDependenties: (config) => (
    Object.entries(config.dependencies)
      .map(([Name, Version]) => ({ Name, Version }))
  ),
  npmDevDependenties: (config) => (
    Object.entries(config.devDependencies)
      .map(([Name, Version]) => ({ Name, Version }))
  ),
};

export default (commandName, dirPath) => {
  const config = JSON.parse(readFile(dirPath));
  const result = generators[commandName](config);
  return result;
};

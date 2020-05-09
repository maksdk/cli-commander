#!/usr/bin/env node

// @ts-check
import { program } from 'commander';
import execude from '../index';

program
  .description('My home commander');

program
  .command('ns [dirPath]')
  .description('show npm scripts')
  .action((dirPath = '.') => {
    const result = execude('npmScripts', dirPath);
    console.table(result);
  });

program
  .command('nd [dirPath]')
  .description('show npm dependenties')
  .action((dirPath = '.') => {
    const result = execude('npmDependenties', dirPath);
    console.table(result);
  });

program
  .command('ndd [dirPath]')
  .description('show npm dev dependenties')
  .action((dirPath = '.') => {
    const result = execude('npmDevDependenties', dirPath);
    console.table(result);
  });

program.parse(process.argv);

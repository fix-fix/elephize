import { CliOptions } from '../../types';

export const defaultOptions: CliOptions = {
  aliases: {},
  bail: 'none',
  baseDir: '.',
  config: '.elephizerc',
  encoding: 'utf-8',
  replaceImports: {},
  ignoreImports: new Set(),
  help: false,
  noZap: false,
  outDir: 'build/',
  output: '__stdout',
  quiet: false,
  rootNs: '\\VK\\Elephize',
  src: '**/*.tsx',
  tsPaths: {},
  verbose: false,
  verboseTypehints: false,
  verboseUsage: false,
  watch: false,
};

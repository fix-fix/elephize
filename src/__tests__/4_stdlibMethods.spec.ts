import { runBatch } from './runBatch';
import { configureLogging } from '../ts2php/components/cli/configureLogging';
import * as path from 'path';

const log = configureLogging({
  baseDir: path.resolve(__dirname, 'specimens'), outDir: '',
});

test('ts2php.stdlibMethods', () => {
  return runBatch([__dirname, 'specimens'], [
    ['arrayMethods', 'map.ts'],
    ['arrayMethods', 'reduce.ts'],
    ['arrayMethods', 'forEach.ts'],
    ['arrayMethods', 'filter.ts'],
    ['arrayMethods', 'some.ts'],
    ['arrayMethods', 'find.ts'],
    ['arrayMethods', 'indexOf.ts'],
    ['arrayMethods', 'pushPop.ts'],
    ['arrayMethods', 'slice.ts'],
    ['arrayMethods', 'splice.ts'],
    ['arrayMethods', 'includes.ts'],
    ['arrayMethods', 'isArray.ts'],
    ['stringMethods', 'strIndexOf.ts'],
    ['stringMethods', 'substr.ts'],
    ['stringMethods', 'strSlice.ts'],
    ['stringMethods', 'split.ts'],
    ['stringMethods', 'replace.ts'],
    ['stringMethods', 'match.ts'],
    ['stringMethods', 'join.ts'],
    ['stringMethods', 'trim.ts'],
    ['stringMethods', 'startsWith.ts'],
    ['stringMethods', 'strIncludes.ts'],
    ['stringMethods', 'parse.ts'],
    ['objectMethods', 'keys.ts'],
    ['objectMethods', 'hasOwnProperty.ts'],
    ['misc', 'defaultOperator.ts'],
    ['misc', 'complexObjectFuncs.ts'],
    ['misc', 'unusedVarsElimination.ts'],
    ['misc', 'customIsomorphics.tsx'],
    ['misc', 'constructorTypeCast.ts'],
    ['misc', 'defaultValues.ts'],
    ['mathMethods', 'basic.ts'],
    ['mathMethods', 'trigonometry.ts'],
    ['mathMethods', 'constants.ts'],
    ['functionMethods', 'closures.ts'],
    ['misc', 'typeInference.ts'],
    ['misc', 'complexTypeInference.ts'],
    ['misc', 'elephizeIgnore.tsx'],
    ['misc', 'exportedTypes.ts'],
    ['misc', 'importedTypes.tsx'],
    ['misc', 'typecast.tsx'],
  ], log);
});

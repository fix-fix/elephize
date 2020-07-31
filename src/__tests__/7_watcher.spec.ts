import { runWatcherTests } from './watcherTestEnv';

test('ts2php.watcher', () => {
  return runWatcherTests({
    // 'Create entrypoint file': {
    //   'startFile': '',
    //   'diffs': {
    //     'diffname': 'expectedFile'
    //   }
    // },
    // 'Delete file (file or entrypoint, used and unused)': {
    //   'startFile': '',
    //   'diffs': {
    //     'diffname': 'expectedFile'
    //   }
    // },
    'modifyFile.entry.ts': {
      'description': 'Modify file',
      'diffs': {
        'modifyFile.1.patch': 'ModifyFileModule.php'
      }
    },
    // 'Import new file': {
    //   'startFile': '',
    //   'diffs': {
    //     'diffname': 'expectedFile'
    //   }
    // },
    // 'Delete import of file': {
    //   'startFile': '',
    //   'diffs': {
    //     'diffname': 'expectedFile'
    //   }
    // },
    // 'Broken TS code (typing)': {
    //   'startFile': '',
    //   'diffs': {
    //     'diffname': 'expectedFile'
    //   }
    // },
    // 'Broken TS code (syntax)': {
    //   'startFile': '',
    //   'diffs': {
    //     'diffname': 'expectedFile'
    //   }
    // },
    // 'Restored TS code (typing)': {
    //   'startFile': '',
    //   'diffs': {
    //     'diffname': 'expectedFile'
    //   }
    // },
    // 'Restored TS code (syntax)': {
    //   'startFile': '',
    //   'diffs': {
    //     'diffname': 'expectedFile'
    //   }
    // },
    // 'Added/removed unused variable': {
    //   'startFile': '',
    //   'diffs': {
    //     'diffname': 'expectedFile'
    //   }
    // },
    // 'Added/removed usage of variable': {
    //   'startFile': '',
    //   'diffs': {
    //     'diffname': 'expectedFile'
    //   }
    // },
    // 'Added/removed usage of undeclared variable': {
    //   'startFile': '',
    //   'diffs': {
    //     'diffname': 'expectedFile'
    //   }
    // },
    // 'Added/removed @elephize* annotations': {
    //   'startFile': '',
    //   'diffs': {
    //     'diffname': 'expectedFile'
    //   }
    // },
  });
});

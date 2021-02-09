// eslint-disable-next-line @typescript-eslint/no-var-requires
const fsExtra = require('fs-extra');

const path = __dirname + '/dist';

fsExtra.copy(path, __dirname + '/src/lib', function (err) {
  if (err) {
    console.error(err);
  }
});

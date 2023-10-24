const {loadJsonFile,loadJsonFileSync} = require('./dhnodejsBundle.cjs');
const res = (...args) => {
    return loadJsonFile(...args);
}
// Old API
res.sync = loadJsonFileSync;
// New API
res.loadJsonFile = loadJsonFile;
res.loadJsonFileSync = loadJsonFileSync;
module.exports = res

const version = () => {
    const ver = require('../package.json').version
    return ver
}

module.exports = { version }
const fsPromises = require('fs').promises

module.exports = (pathUrl) => {
  return fsPromises.readFile(pathUrl, {encoding: 'utf-8'})
    .then(file => {
      return JSON.parse(file)
    })
    .catch((err) => {
      console.log(err);
    });
}
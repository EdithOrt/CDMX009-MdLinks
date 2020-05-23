const fs = require('fs').promises;

function readFileEdith(path) {
    return fs.readFile(path, 'utf8')
        .then(function(data) {
            // console.log(data)
            return `${data}`
        })
        .catch(function(err) {
            //console.log(err);
            return err;
        })
}

readFileEdith('./README.md')
    .then(contenidoArchivo => {
        console.log(contenidoArchivo)
    })
    .catch(err => {
        console.log(err)
    })

module.exports = {
    readFileEdith,
}
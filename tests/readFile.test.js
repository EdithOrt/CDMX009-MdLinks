const { readFileEdith } = require('../readFile');

describe('read file with node.js', () => {
    it('that results in the data', () => {
        let readme = './README.md';
        return readFileEdith(readme)
            .then(datos => {
                console.log(typeof(datos), "Hola Edith aqui debe salir el tipo de dato")
                expect(typeof(datos)).toBe("string")
            })
    })
})
const opts = {
    base: {
        demand: true,
        alias: 'b',
        default: false
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Lista la tabla en consola', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}
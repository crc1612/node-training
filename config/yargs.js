const opts = {
    base: {
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'crea el archivo de la tabla de multiplicar', opts)
    .help().demand('base').argv;

module.exports = {
    argv
};
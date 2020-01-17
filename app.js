// const fs = require('express');
// const fs = require('./');

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('Listar');
        listarTabla(argv.base, argv.limite).then(archivo => console.log(`Archivo creado ${ archivo }`)).catch(err => console.log(err));
        break;
    case 'crear':
        // console.log('crear');
        crearArchivo(argv.base).then(archivo => console.log(`Archivo creado ${ archivo }`)).catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv);
// console.log(process.argv);
// let argv2 = process.argv;

// console.log('Limite', argv.limite);

/* let param = argv[2];
let base = param.split('=')[1]; */

// console.log(base);
// console.log(module);
// console.log(multiplicar);
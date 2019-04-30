//requirements
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

const argv = require('./config/yargs').argv;

const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla.blue))
            .catch(err => console.log(err.red));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo "${archivo}" creado satisfactoriamente`.green))
            .catch(err => console.log(err.red));
        break;
    default:
        console.log(`No se pudo asociar ninguna tarea al comando: "${comando}"`.red);
}
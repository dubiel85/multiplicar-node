const fs = require('fs');

const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Parametro de base: "${base}" incorrecto`);
            return;
        }
        if (!Number(limite)) {
            reject(`Parametro de limite: "${limite}" incorrecto`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        resolve(data);

    });
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Parametro de base: "${base}" incorrecto`);
            return;
        }
        if (!Number(limite)) {
            reject(`Parametro de limite: "${limite}" incorrecto`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });

    });
}


module.exports = {
    crearArchivo,
    listarTabla
}
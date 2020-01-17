// requires
const fs = require('fs');
const colors = require('colors/safe');


let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) && !Number(limite)) {
            reject('No son un numero');
            return;
        }

        console.log('=============================================='.green);
        console.log(`=============Tabla del ${base}=====================`.green);
        console.log('=============================================='.green);

        for (let i = 1; i <= limite; i++) {
            console.log(` ${base} * ${i} = ${base*i}`);
        }
    });
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) && !Number(limite)) {
            reject('No son un numero');
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += ` ${base} * ${i} = ${base*i}\n`;
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tables/tabla-${base}-Limite-del-1-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};
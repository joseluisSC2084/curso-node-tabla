/*
const fs = require('fs');

console .clear();

const base = 3;
let salida = '';
console .log('========================');
console .log('   Tabla del: ', base);
console .log('========================');


for( let i = 1; i <= 10; i++ ){
    //console.log(`${ base } x ${ i } = ${ base * i}`);
    salida += `${ base } x ${ i } = ${ base * i}\n`;
}

console.log(salida);

fs.writeFile(`tabla-${base}.txt`, salida, (err) =>{
    if (err) throw err;
    console.log(`tabla-${base}.txt creado`)
});

const {crearArchivo} = require('./helpers/multiplicar');
console .clear();
const Nbase = 9;
crearArchivo(Nbase)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));



//Parametros desde la consola
console.log(process.argv);
const [,,arg3] = process.argv;
const [,base = 5] = arg3.split('=');
console.log(arg3);

const {crearArchivo} = require('./helpers/multiplicar');
console .clear();
crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));

//npm init 
//npm i yargs
//npm i yargs@16.2.0

const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs').argv;
console.clear();



//const { argv, options } = require('yargs');
// TRABAJANDO CON YARGS
const {crearArchivo} = require('./helpers/multiplicar');


console.clear();
console.log(argv);
//console.log('base: yargs', argv.b);
crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));


// INDEPENDIENTE
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();
crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));
*/

// DAR COLORES A LA CONSOLA
const {crearArchivo} = require('./helpers/multiplicar');
require('colors');
const argv = require('./config/yargs');
console.clear();
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
    .catch(err => console.log(err));


//node app --help
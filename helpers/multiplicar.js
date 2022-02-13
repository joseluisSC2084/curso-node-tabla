const fs = require('fs');
const colors = require('colors');

// Funcion tradicional
/* const crearArchivo = (base = 5) => {
    console .log('========================');
    console .log('   Tabla del: ', base);
    console .log('========================');

    let salida = '';

    for( let i = 1; i <= 10; i++ ){
        salida += `${ base } x ${ i } = ${ base * i}\n`;
    } 
    
    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    
    console.log(`tabla-${base}.txt creado`)
} */

// Promesa
/*const crearArchivo = (base = 5) => {
    const promesa = new Promise((resolve, reject) => {
        console .log('========================');
        console .log('   Tabla del: ', base);
        console .log('========================');

        let salida = '';

        for( let i = 1; i <= 10; i++ ){
            salida += `${ base } x ${ i } = ${ base * i}\n`;
        } 
        
        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        
        resolve(`tabla-${base}.txt creado`)
    });
    return promesa;
}


// Async
const crearArchivo = async(base = 5, listar = false) => {
    try{
        let salida = '';

        for( let i = 1; i <= 10; i++ ){
            salida += `${ base } x ${ i } = ${ base * i}\n`;
        } 
        
        if(listar){
            console.log('========================');
            console.log('   Tabla del: ', base);
            console.log('========================');            
            console.log(salida);
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;
    }catch(err){
        throw err
    }
};
*/

//Dando COLOR.JS a la consola
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try{
        let salida = '';
        let consola = '';

        for( let i = 1; i <= hasta; i++ ){
            salida += `${ base } x ${ i } = ${ base * i}\n`;
            consola += `${ base } ${'x'.green} ${ i } ${'='.green} ${ base * i}\n`;
        } 
        
        if(listar){
            console.log('========================'.green);
            console.log('   Tabla del: '.green, colors.blue(base));
            console.log('========================'.green);            
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;
    }catch(err){
        throw err
    }
};

module.exports = {
    
    crearArchivo //crearArchivo: crearArchivo
}
require('colors');

const functions = require('./proy_modules/text.js')


const main = async() => {
  
    console.log('***************************************************'.cyan);
    console.log(`*                `.cyan, 'MINUSCULAS'.america, `          *`.cyan);
    console.log('***************************************************'.cyan);
    console.log(`*              `.cyan, "" + functions.mayusculas('karen').yellow, `      *   `.cyan);
    console.log('**************************************************'.cyan);
    console.log(`*             `.cyan, 'MAYUSCULAS'.america, `          *`.cyan);
    console.log('**************************************************'.cyan);
    console.log(`*             `.cyan, "" + functions.minusculas('VALENTINA').yellow, `         *   `.cyan);
    console.log('**************************************************'.cyan);
    console.log('**************************************************'.cyan);
    console.log(`*            `.cyan, 'MINUSCULAS Y MAYUSCULAS'.america, `         *`.cyan);
    console.log('**************************************************'.cyan);
    console.log(`*            `.cyan, "" + functions.mayusculasyminusculas('KAREN', 'VALENTINA').yellow, `        *   `.cyan);
    console.log('**************************************************'.cyan);
    console.log('**************************************************'.cyan);
    console.log(`*            `.cyan, 'SE QUITA LA ULTIMA LETRA'.america, `       *`.cyan);
    console.log('**************************************************'.cyan);
    let derecha = "karen valentina";

    function quitarLetra1() {
      if ( derecha.length > 0) {
        derecha = derecha.slice(0, -1);
        console.log( derecha);
        quitarLetra1(); 
      }
    }
    quitarLetra1();
    console.log('***************'.cyan);
}
main();
console.log('***************'.cyan);
    console.log(`*  `.cyan, 'SE QUITA LA PRIMERA LETRA'.america, `          *`.cyan);
    console.log('***************'.cyan); 

let alreves = "karen valentina";

function quitarLetra2() {
  if (alreves.length > 0) {
    console.log(alreves);
    alreves = alreves.slice(1); 
    quitarLetra2();
  }
}

quitarLetra2();
console.log('***************'.cyan);

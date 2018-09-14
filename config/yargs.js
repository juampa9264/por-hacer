
const opts = {
    
       descripcion: {
        alias: 'd',
        demand:true
           }

}

const optsActualizar = {
    
    descripcion: {
     alias: 'd',
     demand:true
    },
    completado: {
        alias: 'c',
        default:true
    }

}


const argv = require('yargs')
.command('actualizar','imprime consola la tabla de multiplicar',

optsActualizar


).command('crear','genera un archivo con la tabla de multiplicar',
opts

)
.command('borrar','genera un archivo con la tabla de multiplicar',
opts

)
.help()
.argv;


module.exports = {
  argv
}
const fs = require('node:fs')
fs.readdir('.', (err,files) =>{
    if(err){
        console.error('Error al leer el directorio: ', err)
        return;
    }
    files.forEach(file => {
        console.log(file)
    })
})

//Otra forma con promesas
const fs2 = require('node:fs/promises')
fs2.readdir('.')
    .then(files => {
        files.forEach(file => {
            console.log(file)
        })
    })
    .catch(err => {
        console.error('Error al leer el directorio: ', err)
        return;
    })
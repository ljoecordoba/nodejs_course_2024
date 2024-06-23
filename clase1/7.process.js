console.log(process.argv)


console.log(process.cwd())


console.log(process.env.PEPITO)

process.on('exit',() => {
    //limpiar los recursos
})

process.exit(0)

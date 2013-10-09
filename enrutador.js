function funcionEnrutar(arg_manejador,arg_ruta) {
    console.log("Voy a Rutear algo para " + arg_ruta);
    if (typeof arg_manejador[arg_ruta] === 'function') {
        return arg_manejador[arg_ruta]();
    } else {
        console.log("No Existe una funcion para la ruta: "+arg_ruta);
        return "No Existe esta Pagina";
    }


}

exports.parametroRutear = funcionEnrutar;
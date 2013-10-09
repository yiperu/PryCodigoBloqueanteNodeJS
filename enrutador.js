function funcionEnrutar(arg_manejador,arg_ruta,respuestaX) {
    console.log("Voy a Rutear algo para " + arg_ruta);
    if (typeof arg_manejador[arg_ruta] === 'function') {
        arg_manejador[arg_ruta](respuestaX);
    } else {
        console.log("No Existe una funcion para la ruta: "+arg_ruta);
        //return "No Existe esta Pagina";
    }


}

exports.parametroRutear = funcionEnrutar;
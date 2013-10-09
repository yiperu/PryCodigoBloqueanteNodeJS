function funcionInicio(respuestaX) {
    console.log("Has ingresado a la pagina de Inicio");

    // Configuraremos aqui un codigo de tal forma que probemo el codigo bloqueante
    //var ahora = new Date().getTime();
    //while(new Date().getTime() < ahora + 10000)

    // --------------- Esto hara un delay de 10 segundos

    respuestaX.writeHead(200,{"Content-Type":"text/html"});
    respuestaX.write("Esta es la pagina de Inicio");
    respuestaX.end();
}

function funcionPagina1(respuestaX) {
    console.log("Has ingresado a la pagina numero 1");
    respuestaX.writeHead(200,{"Content-Type":"text/html"});
    respuestaX.write("Esta es la pagina de Pagina 1");
    respuestaX.end();
}

function funcionPagina2(respuestaX) {
    console.log("Has ingresado a la pagina numero 2");
    respuestaX.writeHead(200,{"Content-Type":"text/html"});
    respuestaX.write("Esta es la pagina de Pagina 2");
    respuestaX.end();
}

function funcionFavicon(respuestaX) {
    console.log("El navegador ah echo peticion de Favicon.ico");
    respuestaX.writeHead(200,{"Content-Type":"text/html"});
    respuestaX.write("");
    respuestaX.end();
}

exports.exportsInicioModuloPeticiones = funcionInicio;
exports.exportsPagina1ModuloPeticiones = funcionPagina1;
exports.exportsPagina2ModuloPeticiones = funcionPagina2;
exports.exportsFaviconModuloPeticiones = funcionFavicon;
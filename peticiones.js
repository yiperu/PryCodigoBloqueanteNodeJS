function funcionInicio() {
    console.log("Has ingresado a la pagina de Inicio");
    return "Inicio";
}

function funcionPagina1() {
    console.log("Has ingresado a la pagina numero 1");
    return "Pagina 1";
}

function funcionPagina2() {
    console.log("Has ingresado a la pagina numero 2");
    return "Pagina 2";
}

function funcionFavicon() {
    console.log("El navegador ah echo peticion de Favicon.ico");
    return "Req de Favicon.ico, no deveria retornar nada aqui ;-)";
}

exports.exportsInicioModuloPeticiones = funcionInicio;
exports.exportsPagina1ModuloPeticiones = funcionPagina1;
exports.exportsPagina2ModuloPeticiones = funcionPagina2;
exports.exportsFaviconModuloPeticiones = funcionFavicon;
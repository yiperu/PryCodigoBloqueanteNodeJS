var variableModuloHttp = require("http");
var variableModuloUrl = require("url");
var variableModuloFs = require("fs");

function funcionIniciar(arg_funcIniciar_ModRutear,manejador) {

    function funcionArrancaServidor(requiere, respuesta) {

        var variableRuta = variableModuloUrl.parse(requiere.url).pathname;

        console.log("Alguien se ha conectado desde un navegador");

        var varContenido = arg_funcIniciar_ModRutear(manejador,variableRuta);

        var registro = variableModuloFs.createWriteStream('registro.txt',{'flags':'a'});
        registro.write(variableRuta + '\n');

        respuesta.writeHead(200,{"Content-Type":"text/html"});
        respuesta.write(varContenido);
        respuesta.end("El texto que escribo aqui tambien se muestra en el navegador");
    }
    variableModuloHttp.createServer(funcionArrancaServidor).listen(8888);
}

exports.exportsDeServidor = funcionIniciar;

//readyState = 0
let xhr = new XMLHttpRequest
//readyState = 1
xhr.open("GET", "ajax.txt")

//readystatechange : se dispara cada vez que la propiedad readyState cambia
xhr.addEventListener("readystatechange", cambioDeEstado)

//load : se dispara cuando el readyState es igual a 4
xhr.addEventListener("load", termino)

//enviar el XHR
xhr.send()

console.log(xhr.response)

function cambioDeEstado(){
    console.log(xhr.readyState)
}

function termino(){
    if (xhr.status == 200){
        console.log(xhr.response)
    }
}

/*
http://127.0.0.1:5500/ajax.html

CORS = Cross Origin Resource Sharing

readyState = Indica en que estado esta el pedido

0 - Objeto Inicializado
1 - Objeto Configurado
2 - Headers enviados y recibidos
3 - Descargando informacion
4 - Pedido finalizado

HTTP

REQUEST
GET index.html HHTP/1.1
Host : http://mipagina.com
User-Agent : (que navegador pide)

RESPONSE
HTTP/1.1 404 Not Found
Server : Apache 5.4 / win32
Content-Type : text/plain (MIME Type)
Content-Length : 11

Metodos/Verbos HTTP:

GET (obtener)- POST(crear) - PUT (reemplaza) - PATCH (editar) - DELETE

"BUENOS"
1xx
2xx
    200 OK
    201 Created
3xx
    304 Not Modified

"MALOS"

ERRORES DEL CLIENTE
4xx
    400 Bad Request
    401 Unauthorized (no autorizado)
    403 Forbidden (prohibido)
    404 Not Found
    405 Method Not Allowed (metodo no correcto)
    418 I'm a Teapot 
    408 Request timeout

ERRORES DEL SERVIDOR
5xx
    500 Internal Server Error 

 */
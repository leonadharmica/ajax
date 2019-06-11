
//readyState = 0
let xhr = new XMLHttpRequest
//readyState = 1
xhr.open("GET", "ajax.txt")
console.log(xhr)

/*
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

 */
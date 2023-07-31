# Instrucciones para trabajar con la entrega

1. En primer lugar, es necesario crear un servidor con los datos indicados en el archivo:
    USER: 'node_user',
    PASSWORD: 'node_password',
    DB: 'db_bootcamp'
Adjunto a este archivo una imagen que detalla los comandos a ejecutar en SQL Shell para armar
el usuario con su contraseña y la base de datos:
nombre_imagen = "1erPaso Generar usuario, contraseña y base de datos de acuerdo al material dispuesto"

2. En segundo lugar, es necesario ejecutar Node. Esto iniciará el servidor y ejecutará
la función cargarDatos(). Esta función ejecutará las tareas solicitadas en el drilling, cargando con datos útiles la base de datos que creamos en el primer paso. Es importante que, una vez se haya cargado esta base de datos:

* Comentar la función cargarDatos() para evitar errores por intentar sobrescribir la información ya cargada.

* Descomentar la función usarDatos() para así poder recurrir a las rutas del servidor sin mayores problemas.

* Es importante reparar en que estas funciones nunca deben funcionar simultaneamente para evitar errores de ejecución. Si se desea comenzar de cero con los datos originales, podemos ejecutar por una vez cargarDatos(), comentar la función cargarDatos, y descomentar usarDatos()

* También se generaron rutas que permitieran realizar las tareas que solicitaba el drilling a través de métodos HTTP:

* • Consultando el Bootcamp por id, incluyendo los usuarios: Método GET - localhost:5001/api/bootcamps/:id
* • Listar todos los Bootcamp con sus usuarios: Método GET - localhost:5001/api/bootcamps/
* • Consultar un usuario por id, incluyendo los Bootcamp: Método GET - localhost:5001/api/usuarios/:id
* • Listar los usuarios con sus Bootcamp: Método GET - localhost:5001/api/usuarios/
* • Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro Sánchez: Método PUT - localhost:5001/api/usuarios/:id
* • Eliminar un usuario por id; por ejemplo: el usuario con id=1: Método DELETE - localhost:5001/api/usuarios/:id

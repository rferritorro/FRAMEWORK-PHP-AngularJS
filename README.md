<h1 align="center">Proyecto Framework-PHP-AngularJS</h1>
<p align="center">By Rafa Ferri </p>


## Tabla de contenidos:

- [Backend](#backend)
- [Frontend](#frontend)

## Backend
---
La parte backend es en cierta parte reutilizada del framework de ---

### Index Backend
- Modul
- Modules
- Resources
- router
- sql
- Utils
- Archivos a nivel de aplicación

### Modul:
Configuración de la conexión a base de datos y funciones para realizar consultar a nuestra base de datos.

## Modules
---
Los modules son los elementos principales de nuesta aplicación y están tanto en backend como en frontend.
En el backend reciben las peticiones de los modulos de js.

- Contact
- Home
- Login
- Search
- Shop

Cada modulo esta divido en controllador,model,BLL y dao

El controlador es el encargado de dar paso a las peticiones del frontend y enviar la información al modelo

El modelo envia la información al BLL

El BLL inicia la sessión con la base de datos y envia la sessión y los datos del frontend al DAO

Y en el DAO se realizará la consulta con los datos

### Utils
En utils guardamos la información de apis:

    También se almacenan los archivos .ini

## Archivos a nivel de aplicación
---
-index.php -> El encargado de cargar la parte del backend

-autoload.php -> Cargamos todo tipo de archivos y ficheros en nuestra aplicación

-paths.php -> Tenemos todas las rutas de ficheros almacenadas en variables

## Frontend 
---
En la parte de frontend,cada petición del cliente se procesa 

## Librerías
---
-Mailjet
-Auth0
-Apinew
-Bootstrap
-Toastr
-L.mapbox



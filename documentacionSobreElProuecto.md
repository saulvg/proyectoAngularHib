## Descripcion ##
Hemos decidido crear una página web basada en Rick y Morty para que los usuarios puedan obtener datos de interés sobre la serie. En la web, los usuarios podrán consultar información sobre los episodios, los personajes y los planetas que existen en la serie.

Además, los usuarios registrados, a quienes consideramos administradores, tendrán la posibilidad de crear, editar, modificar y eliminar secciones de las páginas mencionadas anteriormente.

## Page ##

+ Estaticas
HomePage 
QuienesSomos
Contactanos
NotFound

+ Register/Login

+ Dinamicas (https://rickandmortyapi.com/documentation)
Personajes
Planetas
Episodios

* A tener en cuenta -> si estamos logeados estas tres paginas tendran CRUD(Crear, Editar, Borrar, Leer)

## Pipes ## 
+ Leer mas
+ Episodios acondicionar el formato fecha
+ Episodios acondicionar el formato temporada
 
## Directivas ## 
+ Personajes "vivo o muerto" para cambiar el icono
+ Personajes "genero" para cambiar el icono
+ Compartido "fallo al cargar imagen"


## Estructura ##

APP 
|  
|---LayOut
|       |--Header
|       |   |
|       |   |-Nav
|       |
|       |--Footer
|       
|---PaginasEstaticas 
|           |--HomePage 
|           |--QuienesSomos
|           |--Contactanos
|           |--NotFound
|   
|       
|---PaginasDinamicas (carpeta con modulos)
|           |--Personajes 
|           |       |
|           |       |--Servicios----|
|           |       |               |--Get()
|           |       |               |--Post()
|           |       |               |--Update()
|           |       |               |--Delete() 
|           |       |
|           |       |
|           |       |--Directivas----|
|           |       |                |--VivioMuerrto
|           |       |                |--Genero
|           |       |               
|           |       |               
|           |       |
|           |       |--Pipes---|Leer mas
|           |       |
|           |       |               
|           |       |--Interfaces---|personajes:{}
|           |       |
|           |       |               
|           |       |
|           |       |
|           |       |
|           |       |--Paginas---|
|           |                    |-Publica
|           |                    |-Privada
|           |
|           |
|           |--Planetas
|           |       |
|           |       |--Servicios-----|
|           |       |                |--Get()
|           |       |                |--Post()
|           |       |                |--Update()
|           |       |                |--Delete() 
|           |       |
|           |       |
|           |       |--Pipes---|dimension desconocida
|           |       |
|           |       |               
|           |       |--Interfaces---|planetas:{}
|           |       |
|           |       |               
|           |       |
|           |       |
|           |       |
|           |       |--Paginas---|
|           |                    |-Publica
|           |                    |-Privada 
|           |
|           |
|           |
|           |
|           |--Episodios
|                    |
|                    |--Servicios---|
|                    |              |--Get()
|                    |              |--Post()
|                    |              |--Update()
|                    |              |--Delete() 
|                    |
|                    |
|                    |--Pipes---|
|                    |          |--Formato fecha
|                    |          |--Formato temporada
|                    |
|                    |               
|                    |--Interfaces---|Episodios:{}
|                    |
|                    |               
|                    |
|                    |
|                    |
|                    |--Paginas---|
|                                 |-Publica
|                                 |-Privada
|
|
|           
|---Compartida
|          |
|          |--Directivas---|
|          |               |--Fallo al cargar imagen
|          |                
|          |
|          |                   
|          |--Interceptores---|
|          |                  |--Inyectar token
|          |                
|          |
|          |                   
|          |--Guardianes---|
|                          |--Guardian de sesion iniciada
|                          
|                             
|
|
|
|
|
|
|---Autentificacion-----|
                        |-Pagina login
                        |       |
                        |       |--Login
                        |       |--Registro
                        |
                        |-Servicio
                        |-Interface

 
 


JSON
|
|
|--|rickandmortyDB.json

## Diseño ##
[Enlace figma](https://www.figma.com/file/U0QEhPH95rcm2SiPHhQdjh/Untitled?type=design&node-id=0%3A1&t=ynLZXoEhnGY5UxOV-1)


## Consenso de programacion ##
- COMENTARIOS NUNCA SOBRAN (aclarar codigo)

- comentarios css separados con -
- Idioma: Español
- CamelCase para variabels, carpetas, etc...
- Funciones normales (function(){})
- Declaramos variables encima del constructor y la inicializamos dentro de el
- ngOnInit (si hace falta) debajo del constructor
- mayuscula para: clases, interfaces, DTO
- juego de llaves ->  
                    if(){

                    }else{
                        
                    }
- paths ->  
            {
                path:
                componente/lazyLoad
            }                 

- Punto y coma al final de cada linea
- Comillas dobles


## ENLACES DE INTERES ##
- Figma desing -> https://www.figma.com/file/U0QEhPH95rcm2SiPHhQdjh/Untitled?type=design&node-id=0-1&t=jp3umXEFzWUt8gpG-0
## TODO ##
## DUDAS ##

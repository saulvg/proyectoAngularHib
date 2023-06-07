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
+ Si personaje muerto o vivo cambio color
+ Si planeta dimension desconocida ICONO interrogante si conocido planeta?
+ Episodios acondicionar a formato fecha el dia de emision
+ ?? ordenar temporadas o personajes ascendente y descendente ??
 
## Directivas ## 
- si estamos logeados me aparece una opcion mas en el menu
+ En el listado si tenemos token mostramos el CRUD, si no solo el listado *ngIf
+ Bucle para el listado *ngFor
+ Desplegable en cada componente de la lista con info extra *ngClass


## Estructura ##

APP 
|  
|---LayOut
|       |--Header 
|       |--Nav  ? dentro de header(consejo depende la estetica pero esteban dice si)
|       |--Footer
|       
|---PaginasEstaticas (carpeta con componentes)
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
|           |       |--Pipes---|Cambio color (personajes)
|           |       |
|           |       |               
|           |       |--Interfaces---|personajes:{}
|           |       |
|           |       |               
|           |       |--DTO---|personajes:{}
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
|           |       |--Pipes---|ICONO interrogante dimension desconocida
|           |       |
|           |       |               
|           |       |--Interfaces---|planetas:{}
|           |       |
|           |       |               
|           |       |--DTO---|planetas:{}
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
|                    |--Pipes---|Formato fecha 
|                    |
|                    |               
|                    |--Interfaces---|Episodios:{}
|                    |
|                    |               
|                    |--DTO---|Episodios:{}
|                    |
|                    |
|                    |
|                    |--Paginas---|
|                                 |-Publica
|                                 |-Privada
|
|
|           
|---Compartida(Directivas-comunes)
|          |
|          |--Directivas---|
|                          |--Mostrar CRUD en dinamicas
|                          |--Bucle listado en dinamicas
|                          |--InfoExtra   
|
|
|
|---Autentificacion-----|
                        |-Pagina login
                        |-Autenticacion (interceptores para añadir el token en cada peticion)

 
 


JSON
|
|
|--|rickandmortyDB.json

## Diseño ##
[Enlace figma](https://www.figma.com/file/U0QEhPH95rcm2SiPHhQdjh/Untitled?type=design&node-id=0%3A1&t=ynLZXoEhnGY5UxOV-1)


## Consenso de programacion ##
- COMENTARIOS NUNCA SOBRAN (aclarar codigo)

- Idioma: Español
- CamelCase para variabels, carpetas, etc...
- Funciones normales
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
- descargar y añadir -> funte: Get Schwifty
- ahadir directiva de imgRota a todas las img, ejemplo en planetas html (no te olvides de importar la directiva en los modulos)
## DUDAS ##
- Deben poder registrarse los usuarios ?
- Si es asi debe haber pagina de register ?
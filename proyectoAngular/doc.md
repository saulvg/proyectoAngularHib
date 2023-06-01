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
+ En el listado si tenemos token mostramos el CRUD, si no solo el listado *ngIf
+ Bucle para el listado *ngFor
+ Desplegable en cada componente de la lista con info extra *ngClass


## Estructura ##


APP 
|  
|---LayOut
|       |--Header 
|       |--Nav  ? dentro de header
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
|           |        
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
|
|
|           
|---Compartida(Directivas-comunes)
           |
           |--Directivas---|
                           |--Mostrar CRUD en dinamicas
                           |--Bucle listado en dinamicas
                           |--InfoExtra   



JSON
|
|
|--rickandmortyDB.json


## DUDAS ##
- Deben poder registrarse los usuarios ?
- Si es asi debe haber pagina de register ?
- Donde meteriamos la pagina de login ? estaticas/dinamicas/a parte
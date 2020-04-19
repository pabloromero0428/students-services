# students-services

Es aplicación es una api rest creada con las tecnologías node.js utilizando express y una base de datos mongodb alojada en la nube de mongo db Altas https://www.mongodb.com/cloud/atlas. La aplicación corre de dos maneras, de manera local 3000 asi `localhost:3000/api/students` y en el heroku con el enlace https://servicestudent.herokuapp.com/api/students. 

Si la aplicación se correrá de manera local puede hacerlo de dos formas

> npm star 

Este comando arranca la aplicación y si se realiza un cambio en el código se deberá reiniciar la aplicación para ver el cambio reflejado

> nmp dev 

Este comando arranca la aplicación y si se realiza un cambio en el código se verá reflejado inmediatamente pues se esta utilizando la librería nodemon que reinicia el server automáticamente cuando detecta un cambio

## ¿Como consumir el api? 

Tenga presente que si se consumirá el api de forma local en un aplicación como postman cambie `https://servicestudent.herokuapp.com/api/students` por `localhost:3000/api/student`

### Crear estudiante

Se realiza una petición POST a la url https://servicestudent.herokuapp.com/api/students y enviando en el cuerpo de la petición el siguiente json:

```
{
  "numdocument": "1202",
  "name": "Juancito",
  "lastname": "Estrada",
  "age": "35",
  "note": "3"
}
```

## Ver todos los registros

Se realiza una petición GET a la url https://servicestudent.herokuapp.com/api/students, la app debe traer un json con todos los elementos

## Ver un regitro

Se realiza una petición GET a la url https://servicestudent.herokuapp.com/api/students/`numerodocumento`, en numerodocumento se debe colocar el número del documento del estudiante que se quiere buscar, el cual entra como parámetro, la app debe traer un json el estudiante que busca

## Eliminar todos los registros

Se realiza una petición DELETE a la url https://servicestudent.herokuapp.com/api/students, la app responderá con un mensaje diciendo cuantos elementos elimino


## Eliminar un registro

Se realiza una petición DELETE a la url https://servicestudent.herokuapp.com/api/students/`numerodocumento`, en numerodocumento se debe colocar el numero del documento del estudiante que se quiere eliminar, el cual entra como parámetro, la app debe traer un mensaje dando positivo la eliminación del estudiante.

# Actualizar un registro 

Se realiza una petición PUT a la url https://servicestudent.herokuapp.com/api/students/`numerodocumento`, en numerodocumento se debe colocar el numero del documento del estudiante que se quiere modificar y enviando en el cuerpo de la petición el siguiente json (modificar los datos a su conveniencia):

```
{
	 "numdocument": "1205",
   "name": "Juancito",
   "lastname": "Estrada",
   "age": "35",
   "note": "3"
}
```

## Actualizar todos los registros que cumplan un criterio (El criterio sera edad)

Se realiza una petición PUT a la url https://servicestudent.herokuapp.com/api/students/age/`edad`, en edad se debe colocar la edad de los estudiantes que se quieren modificar y enviando en el cuerpo de la petición un json con el campo a modificar(modificar los datos a su conveniencia) asi todos los estudiantes que tengan esa edad serán modificados con ese campo, un ejemplo de json puede ser:

```
{
   "note": "5"
}
```

Es decir todos los estudiantes de una edad x tendrán en su campo nota 5

## Promedio de notas de los estudiantes 

Se realiza una petición GET a la url https://servicestudent.herokuapp.com/api/students/average, la app debe traer un mensaje con el valor promedio de las notas de los estudiantes

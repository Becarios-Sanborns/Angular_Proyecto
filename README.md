#### 5 de septiembre 2022 - inicio de servicio social

# Semana 1 (05/09/22 - 11/09/2022) 20 horas
Instalación del framework "Angular" con la versión 13 y se hizo la creación del proyecto 
junto con todos los componentes a ocupar.

# Semana 2 (12/09/22 - 18/09/2022) 40 horas
Creación del proyecto con estructura sugerida, donde se creó la carpeta llamada "components" 
es donde alojaremos todos los componentes que el proyecto ocupara, también se creó la carpeta
"interface" donde se encuentra el archivo "usuario-datos.ts" usado como interface.

# Semana 3 (19/09/22 - 25/09/2022) 60 horas
En la carpeta "components" se crearon 7 componentes, que estan divididos en 4 componentes 
son los principales que se muestran en pantalla de inicio los cuales son: registro, tabla, buscador, indicadores. 

Los otros 3 componentes son modales: modal-person, modal-datos, modal-eliminar.

Se creó la estructura respectiva a cada uno de los componentes en HTML y su diseño en CSS. También se escondieron
los componentes "modal-person, modal-datos, modal-eliminar". 

Se creó la conexion entre el componente registro (componente-hijo) y el componente principal app.component (componente-padre),
para poder pasar datos hacia el componente tabla (componente-hijo).

Interface usuario-datos (Typescript): se agregó los datos que se ocuparan y serán de manera obligatoria para poder crear
un objeto de este tipo de dato.

Componente registro (Typescript): se creó las funciones de validación de datos de entrada y el método para poder enviar datos
de componente a componente.

Componente tabla (Typescript): se creó el arreglo que que traera los datos desde el componente padre, y en HTML
se hizo enlace de atributo para poder hacer la conexión.

# Semana 4 (26/09/22 - 02/10/2022) 80 horas

#1 

En los componentes que tienen código Typescript se renombraron las variables para tener una mejor compresión.

Se verificaron errores posibles en la conexión de los componentes registro, tabla y app.component. En el componente tabla se 
modificó el diseño de la tabla, ya que había un error de diseño, el error es que, al agregar un objeto el diseño no se desplazaba 
y por ende no abarcaba los campos de la tabla, este error fue arreglado desde el archivo registro(ts), llamando al div que abarca la
tabla con sentencias javascript para hacer corregir el error.

#2, #3, #4

Se inicio con habilitar a los elementos del componente "indicadores", el cual se pretende pasar el tamaño del 
arreglo de objetos para poder mostrar en pantalla el total que hay. Comparti datos del componente padre (componente tabla) al componente 
que deriva de él que es el componente hijo (componente indicadores) ocupando la misma logica de conexión que en los componentes
registro, app.component, tabla.

Pero hay un error ya que al momento de agregar uno o incluso más de uno, el contador no cambia, sino que mantiene el valor estático
desde que empieza la aplicación esta en ejecución.

#5, #6

Se busco información en foros, videos y documentación para poder corregir este error, pero aun así no quedo muy claro. Aun seguía en 
este detalle. Hize modificaciones al proyecto anterior que era lo de JavaScript.

#7

Despues de buscar información trate de pasarlo mediante "EventEmitter" pensando que sería el funcionamiento de manera correcta,
pero aun tenía el detalle que no se modifica el número sino que al momento de que se ejecuta la aplicación, se imprime en consola 
(impresión para prueba) el valor 0 en este caso, revisando videos tengo la sospecha que sea por el ciclo de vida de los componentes.
Al estar atorado en este punto, volvi al proyecto anterior (Javascript) para completar lo que me falta de los checadores.

# Semana 5

#8

Se vieron videos y se busco información referente al error que tengo, se implemento un observable para poder ver el cambio en el 
componente hijo (componente indicadores), pero marcaba error de que el array que recibía era 'undefined', se implemento dentro del componente 
registro y dentro del componente tabla.

#9

Se corrigio el error de indicadores, pasando como parametro el arreglo donde se guardaban los datos del registro dentro de la tabla,
y se quito código que tenía como decorador '@output'. 

Se corrigieron errores que al momento de ingresar datos al campo edad, al agregar un rango de edad mayor a 80 y mayor a 2 digitos, se 
guardaba, tambíen cuando habia datos vacios en el campo 'apellido'. Se evaluaron las funciones donde se encontraban estas restricciones y
se modificaron, quedando funcionables a los diferentes casos.

#10, 11, 12, 13, 14

Se empezó con intentar hacer la paginación para la tabla, se busco información y videos, referentes a 'ngOnChanges' para poder visualizar
los cambios que recibe el arreglo de objetos, y cada cambio ir guardandolo en un arreglo en el componente hijo (componente tabla). Se implemento
'OnChanges' en la clase y el método para poder ver cambios. Pero solo funciona para cuando entran 2 objetos, después ya no se vuelve a ejecutar 
las lineas de código del metodo onChanges. También ver videos de observables para poder intentarlo de esta manera.






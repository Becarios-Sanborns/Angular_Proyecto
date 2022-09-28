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














 # Ejercicio 2 – Hola Mundo con Angular

 ## 1. (0.75 puntos) ¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado ecommerce? (A las preguntas que te haga Angular CLI puedes contestar utilizando las opciones por defecto).
Para crear un nuevo proyecto Angular llamado "ecommerce" utilizando Angular CLI, primero nos tenemos que situar en la carpeta donde queremos que se inicie el proyecto y luego en la consola de comandos utilizaremos el siguiente comando: 
ng new ecommerce
Primero Angular CLI nos hace una serie de preguntas. En este caso aceptamos todas las opciones que nos da por defecto, y a continuación se despliega el proceso de instalación y creación de los ficheros de Angular necesarios para el proyecto. Finalmente nos sale un mensaje de confirmación conforme se ha terminado la instalación. En nuestro caso, como ya teníamos enlazado el directorio a git también nos aparece un comentario indicándolo. 

### Explora la estructura y los archivos generados:
* tsconfig.json: En este archivo se recoge la Configuración del para hacer la compilación de TypeScript.
* angular.json: Este archivo es la configuración del proyecto Angular. En él encontramos la información sobre la estructura del proyecto, y las dependencias que están instaladas, y otras configuraciones, como los scripts.
* package.json: Este archivo es propio de NPM y en él podemos encontrar las dependencias y scripts de npm que usaremos en nuestro proyecto.
* .editorconfig: es un archivo que contiene la configuración general sobre las características que debe contener el proyecto, tales como la codificación u otros estilos generales. 
* gitignore: esta carpeta contiene toda la información que necesita git para saber qué archivos se deben ignorar al subir el repositorio. Por ejemplo, la carpeta node_modules que vemos a continuación. 
* node_modules, que contiene todos los ficheros de las dependencias NPM, se deberá ignorarb(gitignore), pues estos se instalan cuando se inicia el proyecto. En este directorio también encontramos las dependencias de Angular.
* Ditectorio src: Aquí encontramos el código fuente de la aplicación. Angular CLI nos ayuda generando los ficheros más importantes para nuestro proyecto. 
* index.html: esta es la página principal de nuestro proyecto. Angular nos genera el head del html con todos los ficheros importantes (como el favicon, los scripts o la hoja de estilos) ya enlazados. 
* styles.css: Este archivo contiene los estilos de nuestro proyecyo.
* main.ts: Este es el archivo TS que inicia la aplicación Angular. Ya viene con las importaciones.
* Directorio app: dentro de src encontramos esta carpeta, que contiene los arcgibos del componente principal de la aplicación. 
* app.component.ts, app.component.html, app.component.css: Estos archivos son parte del componente principal de la aplicación.
* app.module.ts: El módulo principal de la aplicación Angular.
* Directorio assets: en esta carèta se guardan todos los recursos que serán necesarios para nuestro proyecto, como imágenes, archivos de datos, fuentes, etc. Cuando se genera el proyecto con Angular se añade el archivo .gitkeep para asegurnarnos de que la carpeta se incluye en git al hacer commit, incluso si está vacía. 


## 2.  Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:


* @app.module.ts: Este archivo TS se usa para declarar un módulo en Angular. Sirve para definir las configuraciones del módulo principal de la aplicación. 

    * declarations: Se trata de un array que contiene todos los componentes, directivas y pipes que pertenecen a este módulo.

    * imports: Este es un array que contiene los módulos de otros archivos que se tienen que hacer disponibles en este módulo.

    * providers: Este es un array que contiene los servicios que deben estar disponibles para usarse en este módulo.

    * bootstrap: Este es un array en el que se especifica cuál es la raíz de nuestro proyecto. En nuestro caso, index.html. 

* app.component.ts. Este archivo TS contiene la definición del componente principal de nuestro proyecto, desd el cual estructuramos la vista principal. 

    * selector Define el selector CSS que se utiliza para referenciar este componente en una plantilla HTML.

    * styleUrls (URLs de Estilos): Se trata de un array de URLs o rutas relativas a los archivos de estilos CSS asociados con el componente.


## 3. (0.25 puntos) ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?
Sí, es posible inyectar el template y los estilos directamente en línea en un componente de Angular sin necesidad de especificarlos mediante las propiedades templateUrl y styleUrls. Esto se puede hacer utilizando las propiedades template y styles directamente en el decorador @Component. Hacerlo de esta manera puede ser útil si estamos ante un proyecto pequeño. No obstante, puede darnos problemas en proyectos más grandes, porque en proyectos con muchos componentes puede dificultar la legibilidad de nuestro código y, a la larga, su mantenimiento.  
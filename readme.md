# Ryu Technology

Este site es de una empresa dedicada al rubro tecnológico de la ingeniería de redes y su aplicación en el ámbito de comunicaciones, seguridad, automatización y domótica,
tanto a nivel empresarial como en los hogares.

## Comenzando 🚀

Este es un proyecto público, puedes decargarte una copia desde la pestaña code o haciendo un Clone 😊

Mira **Deployment** para conocer como luce el proyecto.

El proyecto está formado por 4 páginas:  index, productos, factura y contacto.

El archivo principal de SASS es estilos.scss, desde éste se llaman mediante partials a las otras
hojas.

El SASS compila del archivos estilos.scss de la carpeta SCSS, en el archivo styles.css en la
carpeta CSS (ver archivo package.json)

Los archivos Javascript están en la carpeta JS, que se encuentra organizada asi:

    > Root: contiene los archivos principales:
    
    > _footers contiene los footers utilizados en las páginas.
    > _iniciales contiene los parámetros iniciales del proyecto.
    > _secciones contiene todo el contenido de todas las páginas.

### Pre-requisitos 📋

Para poder usar los SCSS, es necesario tener instalado node.js y tener instalado nodemon.
Puedes utilizar Visual Studio Code o Sublime Text para revisarlo 🔧

### Instalación 

Estas instrucciones están hechas para Visual Studio Code, con el cual lo realicé:

* Instala **node.js** y **npm** desde https://nodejs.org/es/download/

* En el Visual Studio Code úbicate en el directorio del proyecto

* Inicia el npm, con npm init en TERMINAL (Ctrl + ñ)

* Instala el nodemon con: **npm install -D node-sass nodemon**

* Compila con npm: **run watch-css**

Si ya tienes instalado el node.js, ya están incluidos los files package.json y los .scss, puedes editar directamente los .scss 😊
y solamente compilar el proyecto para comenzar.


## Construido con 🛠️


* La mayor parte del código está hecho directamente con CSS en Visual Studio Code 1.63.2

* Todo la lógica está escrita en JavaScript Vanilla directamente.

* Las imágenes no son de mi autoría, todo es material público en internet.

* Componentes como el Tabs de index, el Slider de imágenes, el modal del carrito, Range Slider son ideas tomadas de https://www.w3schools.com/ y modificadas para el proyecto

* Para el menu de filtros de cámaras, tome el código de https://www.npmjs.com/package/@github/check-all para seleccionar los checkbox a la vez

* La fuente del título, fue tomada de https://befonts.com/anurati-font.html

* El layout está desarollado con Flexbox y una parte de Grid.

* El sitio es reponsivo para los breakpoint 1200px, 1024px, 769px, 480px, 319px.

* Se usó para las alertas SweetAlert2, https://sweetalert2.github.io/



## Autor✒️

Este proyecto fue realizado para las clases de JavaScript de CoderHouse por:

**Ing. Luiggi Márquez** - [Profile](https://github.com/luiggimarquez) ✌️

Buenos Aires, Argentina 2022



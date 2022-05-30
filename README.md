#Configurar y Ejecutar la app
Para ejecutar la aplicación debéis poner los comandos:
1. `npm install` - para instalar los modules de node
2. `npm start` - para arrancar la app. Se muestra en el puerto 3000 por defecto.

#Ejecutar los test
Para ejecutar los test de la app pone el comando `npm test`

---

#Los cambios en la app e implementaciones
1. Para desaparecer el menu en el fichero `MainNavigation.js` puse el código jQuiery que analise el estado del scroll. 
Si bajamos el scroll - desaparece el menu, y si subimos - el menu vuelve a posición del scroll.
Se, que no es una buena manera poner el jQuery en las aplicaciones ASP, pero hacer esta función en jQuery es forma más rápida 
que hacerla en JS. 
El JQuery no esta por defecto en npm, por eso he descargado una biblioteca externa por el comando`npm install jquery --save` 
y añade en el fichero `MainNavigation.js` un import `import $ from 'jquery'`.


2. Para poner los URL de la navegación he cambiado dos ficheros: el fichero `MainNavigation.js` y el fichero `App.js`
Por primero voy a explicar sobre los cambios en el fichero `App.js`. Descargue al proyecto una biblioteca externa del npm - 
`npm install react-router-dom@5` que permita crear el router en React y importe esta biblioteca al fichero. 
Después de hacerlo cambié un poco la estructura del código HTML y pone nuevos tags dentro: BrowserRouter, Switch y Route
con los atributos del URL destinos le las páginas que se muestran en navegador
Ya voy a explicar sobre el fichero `MainNavigation.js` editado. En este fichero, por primero, importe la biblioteca del router descargada y en el código HTML del 
return puse los `<Link></Link>` con el atributo `to`, donde está el URL para navegar entre las páginas.


3. Como he visto, cuando ejecute el proyecto primera vez, que la página de los `MeetupItem.js` no funcionaba correctamente 
y no carga bien los datos del fichero `data.json`, cambie el código de la carga para que los eventos se muestran bien. 
Después de este, cambie la estructura del fichero `data.json` y añade ahi un atributo más - es el atributo `"important"` del boolean, que
muestre el estado en la lista de favoritos. Y en el fichero `MeetupItem.js` analise este atributo para mostrar el button correcto.
Para mostrar los eventos favoritos he creado nuevo fichero `FavMeetupItems.js` y cambié el código en el fichero `Favorites.js` para mostrar
la lista de los objetos favoritos. 
La estructura del HTML en el fichero `FavMeetupItems.js` es la misma que en el fichero `MeetupItem.js`, pero hay una diferencia que en `FavMeetupItems.js` 
analizo el atributo `"important"` si es `true`, mientras en el fichero `MeetupItem.js` muestro todos los eventos sin analizar este atributo.
Por fin vuelvo al fichero `MainNavigation.js` y cree una función que calcula los elementos en array de eventos con el atributo `important===true`,
para mostrar la digita de las tarjetas añadidas al favorito.

_Sobre el button del añadir al favorito: se, que hay forma de hacerlo con el localstorage y con el Redux y como no tenía
mucha experiencia de trabajar con Redux, probaba hacerlo con localstorage, pero no he terminado por los errores. Por eso pare este parte.
También hay una forma de hacer es, si los datos están en un base de datos, y hay un servidor con REST API del anadir al favorito, es posible 
conectar con él y cambiar el estado 'true'/'false' en parte del front de React._ 

4. Los test unitarios. He creado algunos ficheros nuevos que hacen estos test correctamente. Estos test analizan solo los archivos cambiados.
Se hacen el render sin crash y hacen un render a snapshot. 

Los ficheros del test son:
* MainNavigation.test.js
* FavMeetupItem.test.js
* MeetupItem.test.js
* App.test.js



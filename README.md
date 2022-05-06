# Scotchs
##En el navbar se puede encontrar las principales rutas de la pagina


  *Haciendo click el apartado de inicio, en el brand name o en el logo, estaramos llendo a la parte principal. Como su nombre lo indica, el inicio.
      **En el Inicio podemos encontrar un apartado que nos lleva a ver todos los productos. Abajo encontramos 2 apartados mas que nos llevaran a los productos filtrados por Bebidas o Tabacos dependiendo el interes del cliente. Por ultimo tenemos un apartado de productos destacados, los productos que se muestran aca tienen que tener como valor true en la llave de destacado en firebase, el boton de Ver Detalles que alli se encuentra, tiene el mismo funcionamiento que en el catalogo.
  *En el apartado de Productos (/productos), nos mustra todos los productos que estamos recibiendo desde firebase.
     **Por cada Item (producto) se genera un contador el cual esta condicionado para que no baje de 0 y no pase del stock de el item en particular
     **Por cada Item, tambien se encuentra un boton en la parte superior que nos lleva a los detalles individuales de cada item(/productos/item/:id), mostrando 
  informacion adicional como una descripcion, lugar de origen, cantidad, etc. Desde esta parte podemos agregar el producto al carrito, seleccionando la cantidad           de productos que el cliente quiera.
  *El siguiente apartado es el de Nosotros, donde hay una pequeña info aidicional sobre el e-commerce
  *El ultimo apartado es el de Contacto donde hay un form de contacto, el cual es totalmente funcional, usando una libreria llamada formspree.
   *En el Medio tenemos el Carrito, que nos muestra la cantidad de productos que tenemos agregados, haciendo click nos dirijimos a /cart, si este se encuentra vacio, nos aparece una pantalla informando que el carrito esta vacio y un link que nos lleva a ver todos los productos. Caso contrario podemos ver todos los productos que agregamos y podemos proceder a realizar la compra(el proceso lo explico mas abajo), y podemos vaciar el carrito completamente o eliminar los productos uno por uno a gusto del cliente.
        **Proceso de compra, una vez que el cliente quiere ralizar su orden, puede hacer click en el boton Confirmar Compra, en la pantalla se mostraria un formulario para ingresar datos personales, luego de rellenar este formulario, el cliente hace click en confirmar compra donde aparece una alerta (use la libreria seet alerts) donde se muestra un mensaje positivo con datos del cliente y al mismo tiempo se borraria el carrito, en caso de no haber stock en algunos productos, se muestra una alerta negativa con los productos que se encuentran fuera de stock.
        
##Al final, hay un footer, alli se encuentra el logo y el brand, donde tambien se puede ir al inicio. A la derecha hay un boton de login para administradores (usuario: admin y contrasena: nimda123) alli se pueden agregar productos para mostrar en el catalogo, sin necesidad de ir directo a firebase y agregarlos a mano. Luego de agregar el producto, use una libreria para mostrar una confirmacion a la derecha superior, llamada toastify.
   
   
gif: https://media.giphy.com/media/wM3jD9A11VtV7YEFJc/giphy.gif
  

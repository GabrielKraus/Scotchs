# Scotchs
En el navbar se puede encontrar las principales rutas de la pagina
  -Haciendo click el apartado de inicio, en el brand name o en el logo, estaramos llendo a la parte principal. Como su nombre lo indica, el inicio.
  -En el apartado de Productos (/productos), nos mustra todos los productos que estamos mandando desde asyncmock.js.
     +Por cada Item (producto) se genera un contador el cual esta condicionado para que no baje de 0 y no pase del stock de el item en particular
     +Por cada Item, tambien se encuentra un boton en la parte superior que nos lleva a los detalles individuales de cada item(/productos/item/:id), mostrando 
          informacion adicional como una descripcion, lugar de origen, cantidad, etc
  -El siguiente apartado es el de Nosotros, donde hay una pequeña info aidicional sobre el e-commerce, este apartado aun esta en "construccion"
  -El ultimo apartado es el de Contacto donde hay un form de contacto.
  
  
En el inicio, hay 3 apartados, uno superior que, al igual que el apartado del nav "productos", nos lleva a mostrar todos los productos. Luego hay 2 inferiores, 
  uno nos lleva a mostrar unicamente la lista de los productos con categoria bebidas y el otro a la categoria tabacos (/productos/categoria/:categoryId)
  Al final del inicio, me tome la libertad de hacer un carrousel que muestra solo los productos que tienen el valor true de la key destacado en los productos
  de asyncmock.
  
  
  #Cosas que quiero realizar:
    -Implementar la barra de busqueda que se encuentra en el nav
    -agregar un sidebar en las listas de productos, para poder filtrarlos ya sea por precio, marca, origen, etc

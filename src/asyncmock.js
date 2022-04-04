const products = [
    {
        id: 1,
        brand: "The Glenlivet",
        name: "Founder's Reserve",
        country: "Escocia",
        volume: "750ml",
        price: 6280,
        img: "https://http2.mlstatic.com/D_NQ_NP_789859-MLA44850220471_022021-V.webp",
        category: "bebidas",
        subCat: ["whisky", "single malt whisky"],
        stock: 6,
        descuento: 0,
        desc: "Para capturar verdaderamente la esencia de la visión de George Smith, The Glenlivet Founder’s Reserve se ha creado utilizando los métodos de destilación tradicionales que introdujo hace tanto tiempo. Hecho con agua de los mismos arroyos cristalinos de las montañas, en el mismo aire frío y puro, The Glenlivet Founder’s Reserve es tan suave y afrutado como el whisky que salió por primera vez de los alambiques de cobre originales. Las tradicionales barricas de roble en las que se ha madurado el whisky dan a cada expresión sus propias características distintivas."
    },{
        id: 2,
        brand: "Jack Daniel's",
        name: "Old No. 7",
        country: "Estados Unidos",
        volume: "750ml",
        price: 4721,
        img: "https://http2.mlstatic.com/D_NQ_NP_675836-MLA44850209745_022021-O.webp",
        category: "bebidas",
        subCat: ["whisky"],
        stock: 17,
        descuento: 0,
        desc: "Suavizado gota a gota a través de 10 pies de carbón de arce azúcar, luego madurado en barriles artesanales de nuestra propia fabricación. Este Tennessee Whiskey no sigue un calendario. Solo está listo cuando los catadores de la empresa lo deciden, juzgando la forma en que se ve, su aroma. Y, por supuesto por como sabe. Es como lo hizo el propio Jack Daniel hace más de un siglo. Y cómo todavía lo hacemos hoy. Añejado al menos 4 años en barricas nuevas de roble"
    },{
        id: 3,
        brand: "Johnnie Walker",
        name: "Black Label",
        country: "Escocia",
        volume: "1000ml",
        price: 4765,
        img: "https://http2.mlstatic.com/D_NQ_NP_906543-MLA49287255637_032022-O.webp",
        category: "bebidas",
        subCat: ["whisky"],
        stock: 23,
        descuento: 0,
        desc: "Johnnie Walker Black Label es rico, complejo y bien balanceado, un blend con notas a frutos del bosque, vainilla y tierra ahumada. Mezclado exclusivamente con whiskies madurados por al menos 12 años, reúne sabores de los 4 rincones de Escocia para crear una experiencia compleja, profunda y enriquecedora. Johnnie Walker Black Label se desarrolla suavemente sobre la lengua, liberando notas intensas de vainilla dulce que dan paso a notas de cáscara de naranja y aromas a especias y pasas. El final es increíblemente suave y equilibrado, rico en humo, turba y malta."
    },{
        id: 4,
        brand: "Argento",
        name: "Vainilla",
        country: "Argentina",
        volume: "40g",
        price: 520,
        img: "https://tabaqueriahorus.com/wp-content/uploads/2019/11/paquete-vainilla.jpg",
        category: "tabacos",
        subCat: ["armar", "nacional"],
        stock: 11,
        descuento: 0,
        desc: "Tabaco argento vainilla para armar cigarrillos. Esta variedad de Argento es una mezcla tipo americana de tabacos argentinos cuidadosamente aromatizados y saborizados con vainilla seleccionada. Tiene un aroma dulce y floral con un sabor muy agradable, ideal para quienes disfrutan de tabacos con una intensidad media."
    },{
        id: 5,
        brand: "Argento",
        name: "Negro",
        country: "Argentina",
        volume: "40g",
        price: 450,
        img: "https://parainfernalia.com.ar/wp-content/uploads/2017/09/tabaco-para-pipa-negro-precio-argento.jpg",
        category: "tabacos",
        subCat: ["pipa", "nacional"],
        stock: 8,
        descuento: 0,
        desc: "En este caso, el tabaco Argento negro tiene un cuerpo denso y una intensidad muy fuerte; es muy recomendable para fumadores recurrentes acostumbrados a estos sabores, así como también a fumar en pipa de madera."
    },{
        id: 6,
        brand: "Van Häasen",
        name: "Natural",
        country: "Argentina",
        volume: "30g",
        price: 580,
        img: "https://i2.wp.com/www.donjuantabaco.com.ar/wp-content/uploads/2020/05/don-juan-tabaco-van-haasen-original-blend.jpg?fit=600%2C600&ssl=1",
        category: "tabacos",
        subCat: ["armar", "importado"],
        stock: 15,
        descuento: 0,
        desc: "Blend de 5 variedades de tabacos Virginia cuidadosamente seleccionados, sin aditivos. Al fumarse expresa una sensación muy llenadora en boca, teniendo suave intensidad en el paladar y un final muy equilibrado. Incomparable experiencia."
    },{
        id: 7,
        brand: "Van Häasen",
        name: "Vainilla",
        country: "Argentina",
        volume: "30g",
        price: 440,
        img: "https://parainfernalia.com.ar/wp-content/uploads/2021/09/van-haasen-vai-distribuidor-pi-1.jpg",
        category: "tabacos",
        subCat: ["armar", "importado"],
        stock: 10,
        descuento: 0,
        desc: "Estos tabacos tienen la particularidad de ser saborizados y aromatizados. En esta ocasión traemos un blend de Vainilla, es un tabaco muy suave lo que permite disfrutar del cigarro armado y no empalagarte con su sabor. El paquete contiene 30gr de tabaco para que puedas siempre tener contenido para armar tus cigarros. Al ser pequeño el envoltorio es muy practico para llevar a donde quieras y estar listo. Estos tabacos son materia prima de plantaciones en toda Sudamérica donde se cosechan variedades de Virginia y Burley. Son perfecto para los que recién arrancan en el habito de fumador por su suave sabor."
    },{
        id: 8,
        brand: "Van Häasen",
        name: "Middle",
        country: "Argentina",
        volume: "30g",
        price: 480,
        img: "https://parainfernalia.com.ar/wp-content/uploads/2017/04/tabaco-van-haasen-middle-tabaqueria.jpg",
        category: "tabacos",
        subCat: ["armar", "importado"],
        stock: 11,
        descuento: 0,
        desc: "Tabaco Van Häasen middle  es una de las variedades intensas de la marca. Van Haasen Middle tiene un aroma que no resulta invasivo y una combustión lenta que favorece al disfrute del fumador."
    },{
        id: 9,
        brand: "Van Häasen",
        name: "Intense",
        country: "Argentina",
        volume: "30g",
        price: 510,
        img: "https://parainfernalia.com.ar/wp-content/uploads/2017/04/tabaco-van-haasen-intense-tabaqueria-precio.jpg",
        category: "tabacos",
        subCat: ["armar", "importado"],
        stock: 8,
        descuento: 0,
        desc: "Tabaco Van Häasen intense es una variedad ideal para aquellos fumadores de cigarrillos industrializados que desean comenzar a fumar tabaco para armar. Con un sabor intenso, su aroma denota las especies de maderas duras que se utilizan en el curado de las hojas durante su producción."
    },{
        id: 10,
        brand: "Cuatro Leguas",
        name: "Rubio",
        country: "Argentina",
        volume: "50g",
        price: 190,
        img: "https://parainfernalia.com.ar/wp-content/uploads/2017/08/tabaco-cuatro-leguas-venta.jpg",
        category: "tabacos",
        subCat: ["armar", "nacional"],
        stock: 20,
        descuento: 0,
        desc: "Tabaco Cuatro leguas original para armar cigarrillos regulares. De origen Argentino, el tabaco Cuatro Leguas combina de una manera muy equilibrada diferentes variedades para lograr un sabor y aroma único además de resultar liviano en la boca."
    },{
        id: 11,
        brand: "Argento",
        name: "Chocolate",
        country: "Argentina",
        volume: "40g",
        price: 552,
        img: "https://parainfernalia.com.ar/wp-content/uploads/2019/08/tabaco-argento-chocolate-venta.jpg",
        category: "tabacos",
        subCat: ["armar", "nacional"],
        stock: 18,
        descuento: 0,
        desc: "Tabaco Argento de chocolate para armar cigarrillos. Argento es una marca pionera en tabacos para pipa que ofrece una buena variedad de sabores que ofrecen una experiencia distinta a la hora de fumar en pipa, pero en este caso, presenta su tabaco tradicional para armar cigarrillos. Es un blend de tabacos americanos de intensidad medio con un sutil sabor a cacao."
    },{
        id: 12,
        brand: "Argento",
        name: "Menta",
        country: "Argentina",
        volume: "40g",
        price: 552,
        img: "https://parainfernalia.com.ar/wp-content/uploads/2019/08/tabaco-argento-menta-venta.jpg",
        category: "tabacos",
        subCat: ["armar", "nacional"],
        stock: 18,
        descuento: 0,
        desc: "Tabaco Argento de menta para armar cigarrillos. Argento es una marca pionera en tabacos para pipa que ofrece una buena variedad de sabores que ofrecen una experiencia distinta a la hora de fumar en pipa, pero en este caso, presenta su tabaco tradicional para armar cigarrillos. Es un blend de tabacos virginia de intensidad medio y como esta presentación cuenta con un ligero sabor a menta, otorga una frescura muy agradable a los sentidos en cada pitada."
    },{
        id: 13,
        brand: "Argento",
        name: "Natural",
        country: "Argentina",
        volume: "40g",
        price: 552,
        img: "https://parainfernalia.com.ar/wp-content/uploads/2017/09/tabaco-argento-natural-precio-1.jpg",
        category: "tabacos",
        subCat: ["armar", "nacional"],
        stock: 12,
        descuento: 0,
        desc: "Tabaco Argento natural para armar cigarrillos. Una de las marcas clásicas de tabaco para pipas cuenta con diferentes presentaciones y sabores para que fumar en pipa sea una experiencia diferente, pero en este caso, Argento nos trae su tabaco natural para armar cigarrillos tradicionales. Se trata de un tabaco trabajado con procesos naturales y por eso es considerado orgánico."
    },{
        id: 14,
        brand: "Argento",
        name: "Vainilla",
        country: "Argentina",
        volume: "50g",
        price: 696,
        img: "https://parainfernalia.com.ar/wp-content/uploads/2019/05/tabaco-para-pipa-vainilla-precio-argento.jpg",
        category: "tabacos",
        subCat: ["pipa", "nacional"],
        stock: 10,
        descuento: 0,
        desc: "Tabaco Argento vainilla para pipa. El tabaco para pipa se caracteriza por ser mucho más intenso que el tabaco tradicional, por eso es que Argento ofrece  diferentes variedades para todos los gustos. En este caso, el tabaco está saborizado con un sutil sabor a vainilla que da como resultado un sabor dulce muy particular y una aroma muy agradable. Es ideal para fumar en pipa de madera y resulta una experiencia nueva para todos los sentidos."
    },{
        id: 15,
        brand: "Argento",
        name: "Whisky & Chocolate",
        country: "Argentina",
        volume: "50g",
        price: 696,
        img: "https://parainfernalia.com.ar/wp-content/uploads/2017/09/tabaco-para-pipa-chocolate-precio-argento.jpg",
        category: "tabacos",
        subCat: ["pipa", "nacional"],
        stock: 16,
        descuento: 0,
        desc: "Tabaco Argento Whisky y chocolate para pipa. El tabaco para pipa se caracteriza por ser mucho más intenso que el tabaco tradicional, por eso es que Argento ofrece  diferentes variedades para todos los gustos. En este caso, el tabaco está saborizado con un sutil sabor a whisky combinado con chocolate que da como resultado un sabor muy particular y una aroma muy agradable. Es ideal para fumar en pipa de madera y resulta una experiencia nueva para todos los sentidos."
    },{
        id: 16,
        brand: "Argento",
        name: "Latakia",
        country: "Argentina",
        volume: "50g",
        price: 1002,
        img: "https://parainfernalia.com.ar/wp-content/uploads/2019/05/tabaco-para-pipa-latakia-precio-247x247.jpg",
        category: "tabacos",
        subCat: ["pipa", "nacional"],
        stock: 5,
        descuento: 0,
        desc: "Tabaco Argento Latakia para pipa. El tabaco para pipa se caracteriza por ser mucho más intenso que el tabaco tradicional, por eso es que Argento ofrece  diferentes variedades para todos los gustos. En este caso, el tabaco es un blend de tabacos Burley, Virginia y tabacos orientales que da como resultado un sabor de intensidad media a alta, muy particular y una aroma muy agradable. Es ideal para fumar en pipa de madera y resulta una experiencia nueva para todos los sentidos."
    },{
        id: 17,
        brand: "Buchanan's",
        name: "De Luxe 12 años",
        country: "Escocia",
        volume: "750ml",
        price: 4270,
        img: "http://www.puroescabio.com.ar/web/image/product.product/60875/image_1024/%5B7103%5D%20BUCHANANS%20DE%20LUXE%2012%20A%C3%91OS%20750ml?unique=010ba4c",
        category: "bebidas",
        subCat: ["whisky"],
        stock: 17,
        descuento: 0,
        desc: "cuenta con 12 años de añejamiento, triplemente mezclado de whiskies de malta y grano. Además de cuidado y paciencia, el proceso, que incluye tres fases de mezcla, hace que el Buchanans De Luxe 12 años sea el whisky más suave del mundo. Una de las mezclas está dedicada a alcanzar el equilibrio perfecto del whisky de malta, y dirigida a alcanzar el equilibrio perfecto del whisky de trigo. En la fase final, las maltas y los trigos se mezclan para dar un resultado excepcional."
    },{
        id: 18,
        brand: "Johnnie Walker",
        name: "Black 200",
        country: "Escocia",
        volume: "700ml",
        price: 4980,
        img: "http://www.puroescabio.com.ar/web/image/product.product/52682/image_1024/%5B3297%5D%20JOHNNIE%20WALKER%20BLACK%20200%20YEARS%20700ml?unique=010ba4c",
        category: "bebidas",
        subCat: ["whisky"],
        stock: 10,
        descuento: 0,
        desc: "Johnnie Walker 200th Black Label Edición Limitada es dulzura envuelta en humo: la fruta más dulce se une al cremoso caramelo para acabar en un ahumado crepitante."
    },{
        id: 18,
        brand: "Aberlour",
        name: "12 años",
        country: "Escocia",
        volume: "700ml",
        price: 8160,
        img: "http://www.puroescabio.com.ar/web/image/product.product/60239/image_1024/%5B4755%5D%20ABERLOUR%2012%20A%C3%91OS%20700ml?unique=010ba4c",
        category: "bebidas",
        subCat: ["whisky"],
        stock: 11,
        descuento: 0,
        desc: "Notas de cata: Nariz: Tostada de canela con manteca, pasas concentradas en el fondo, toques astringentes de madera, cereza glaseada, carbón de barril. Paladar: Gran golpe de manteca dulce, con jarabe de arce, azúcar morena, pasas rellenas, nuez moscada, chocolate con leche y más carbón vegetal de la nariz. Final: Longitud media, con chocolate, pasas y carbón."
    },{
        id: 19,
        brand: "The Glenrothers",
        name: "12 años",
        country: "Escocia",
        volume: "700ml",
        price: 23660,
        img: "http://www.puroescabio.com.ar/web/image/product.product/48175/image_1024/%5B2600%5D%20THE%20GLENROTHES%2012%20A%C3%91OS%20700ml?unique=010ba4c",
        category: "bebidas",
        subCat: ["whisky"],
        stock: 5,
        descuento: 0,
        desc: "Color ambarino intenso limpio y brillante con un olor Ligero a fragancia de plátano y vainilla. Dejando sabores a plátano, limón y melón con un toque de canela. Final largo y suave con notas de melón y ligeras especias."
    },{
        id: 20,
        brand: "Chivas Regal",
        name: "12 años",
        country: "Escocia",
        volume: "500ml",
        price: 2960,
        img: "http://www.puroescabio.com.ar/web/image/product.product/48177/image_1024/%5B2504%5D%20CHIVAS%20REGAL%2012%20A%C3%91OS%20500ml?unique=010ba4c",
        category: "bebidas",
        subCat: ["whisky"],
        stock: 18,
        descuento: 0,
        desc: "Chivas Regal cuenta con 12 años de añejamiento, triplemente mezclado de whiskies de malta y grano. Además de cuidado y paciencia, el proceso, que incluye tres fases de mezcla, hace que el Chivas Regal 12 años sea el whisky más suave del mundo. Una de las mezclas está dedicada a alcanzar el equilibrio perfecto del whisky de malta, y dirigida a alcanzar el equilibrio perfecto del whisky de trigo. En la fase final, las maltas y los trigos se mezclan para dar un resultado excepcional."
    },{
        id: 21,
        brand: "The Glenrothers",
        name: "10 años",
        country: "Escocia",
        volume: "700ml",
        price: 19500,
        img: "http://www.puroescabio.com.ar/web/image/product.product/48174/image_1024/%5B2599%5D%20THE%20GLENROTHES%2010%20A%C3%91OS%20700ml?unique=010ba4c",
        category: "bebidas",
        subCat: ["whisky"],
        stock: 8,
        descuento: 0,
        desc: "The Glenrothes 10 Años es un whisky añejado solo en barricas de roble envinadas con jerez y embotellado con su color natural. Con un carácter de vainilla, masa quebrada y cáscara de limón. Un single malt delicado y de estilo más sutil. En boca es dulce, cáscara de limón y malta ligera."
    },{
        id: 22,
        brand: "Jameson",
        name: "Black Barrel",
        country: "Irlanda",
        volume: "750ml",
        price: 5920,
        img: "http://www.puroescabio.com.ar/web/image/product.product/48173/image_1024/%5B2542%5D%20JAMESON%20BLACK%20BARREL%20750ml?unique=110ca76",
        category: "bebidas",
        subCat: ["whisky"],
        stock: 24,
        descuento: 0,
        desc: "Una versión especial de Jameson todavía con mucho whisky. Black Barrel tiene una gran cantidad de barriles de jerez y bourbon de primer llenado en la mezcla, lo que le da un sabor mucho más rico que el Jameson normal, con una fuerte nota de jerez."
    },{
        id: 23,
        brand: "Jameson",
        name: "Caskmates IPA",
        country: "Irlanda",
        volume: "750ml",
        price: 3610,
        img: "http://www.puroescabio.com.ar/web/image/product.product/48171/image_1024/%5B2543%5D%20JAMESON%20CASKMATES%20IPA%20750ml?unique=010ba4c",
        category: "bebidas",
        subCat: ["whisky"],
        stock: 19,
        descuento: 0,
        desc: "Aroma con notas florales y cítricas de pomelo, toques sutiles de frutas de la huerta y un dejo herbal a lúpulo, este whiskey se complementa con virutas de madera y un suave aroma a nuez con sabor a lúpulo y cítricos suaves con notas de hierbas dulces y delicados tonos especiados. Acabado con La persistencia de la fruta fresca y el lúpulo dan paso a los granos de cebada y a su acabado suave y característico."
    },{
        id: 24,
        brand: "Chivas Regal",
        name: "Royal Salute 21 años",
        country: "Escocia",
        volume: "750ml",
        price: 34130,
        img: "http://www.puroescabio.com.ar/web/image/product.product/44321/image_1024/%5B579%5D%20CHIVAS%20REGAL%20ROYAL%20SALUTE%2021%20A%C3%91OS%20750ml?unique=010ba4c",
        category: "bebidas",
        subCat: ["whisky"],
        stock: 5,
        descuento: 0,
        desc: "El Chivas Regal Salute 21 años viene en una elegante botella de porcelana de Wade. Es un whisky muy singular, que combina el caracter de algunos de las mejores maltas que se conservan en la destileria de Strathisla."
    },{
        id: 25,
        brand: "Macallan",
        name: "Oscuro Edicion Limitada",
        country: "Escocia",
        volume: "700ml",
        price: 679889,
        img: "https://http2.mlstatic.com/D_NQ_NP_738377-MLA48928580767_012022-O.webp",
        category: "bebidas",
        subCat: ["whisky"],
        stock: 2,
        descuento: 0,
        desc: "El nombre de este whisky está inspirado en su tradición sazonada en jerez y su deliciosa intensidad. Oscuro, deliciosamente intenso y gratificante. The Macallan Oscuro se extrae únicamente de barricas de roble que previamente han albergado jerez oloroso. Primero se llena una proporción excepcionalmente alta de ellas, lo que dota al whisky de un color profundo y vivo, así como de un sabor intenso."
    }
    
    
]

export const getProducts = () =>{
    return new Promise((resolve, eject) => {
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 2000)
    })
}

export const getProductByCat = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((el)=> el.category === category))
        }, 2000)
    })
}
const products = [
    {
        id: 1,
        brand: "The Glenlivet",
        name: "Founder's Reserve",
        country: "Escocia",
        volume: "750ml",
        price: 6280,
        img: "https://http2.mlstatic.com/D_NQ_NP_789859-MLA44850220471_022021-V.webp",
        category: "bebida",
        subCat: ["whisky", "single malt whisky"],
        stock: 6,
        descuento: 0,
        desc: "Para capturar verdaderamente la esencia de la visión de George Smith, The Glenlivet Founder’s Reserve se ha creado utilizando los métodos de destilación tradicionales que introdujo hace tanto tiempo. Hecho con agua de los mismos arroyos cristalinos de las montañas, en el mismo aire frío y puro, The Glenlivet Founder’s Reserve es tan suave y afrutado como el whisky que salió por primera vez de los alambiques de cobre originales. Las tradicionales barricas de roble en las que se ha madurado el whisky dan a cada expresión sus propias características distintivas. Cuando George Smith comenzó a destilar, The Glenlivet no tenía declaraciones de edad y seleccionó whisky de barriles de diferentes edades. Se ha replicado esta libertad con The Glenlivet Founder’s Reserve, seleccionando whisky de una variedad de barricas tradicionales de roble americano. Luego, para darle un toque moderno al sabor de la expresión, el maestro destilador Alan Winchester combina una selección de barricas de roble americano y otras barricas de roble americano de primer uso. Las barricas de roble americano de primer uso son aquellas que nunca antes se habían utilizado para madurar el whisky. El uso selectivo de estos barriles proporciona una dulzura suave y cremosa que se mezcla armoniosamente con los delicados sabores y los complejos tonos afrutados que ya están presentes en el whisky."
    },{
        id: 2,
        brand: "Jack Daniel's",
        name: "Old No. 7",
        country: "Estados Unidos",
        volume: "750ml",
        price: 4721,
        img: "https://http2.mlstatic.com/D_NQ_NP_675836-MLA44850209745_022021-O.webp",
        category: "bebida",
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
        category: "bebida",
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
        category: "tabaco",
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
        category: "tabaco",
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
        category: "tabaco",
        subCat: ["armar", "importado"],
        stock: 15,
        descuento: 0,
        desc: "Blend de 5 variedades de tabacos Virginia cuidadosamente seleccionados, sin aditivos. Al fumarse expresa una sensación muy llenadora en boca, teniendo suave intensidad en el paladar y un final muy equilibrado. Incomparable experiencia."
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
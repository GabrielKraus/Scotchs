const products = [
    {
        id: 1,
        brand: "The Glenlivet",
        name: "Founder's Reserve",
        country: "Escocia",
        volume: "750ml",
        price: 6280,
        img: "https://http2.mlstatic.com/D_NQ_NP_789859-MLA44850220471_022021-V.webp",
        category: "BEBIDA",
        subCat: "WHISKY",
        stock: 6,
        descuento: 0
    },{
        id: 2,
        brand: "Jack Daniel's",
        name: "Old No. 7",
        country: "Estados Unidos",
        volume: "750ml",
        price: 4721,
        img: "https://http2.mlstatic.com/D_NQ_NP_675836-MLA44850209745_022021-O.webp",
        category: "BEBIDA",
        subCat: "WHISKY",
        stock: 17,
        descuento: 0
    },{
        id: 3,
        brand: "Johnnie Walker",
        name: "Black Label",
        country: "Escocia",
        volume: "1000ml",
        price: 4765,
        img: "https://http2.mlstatic.com/D_NQ_NP_906543-MLA49287255637_032022-O.webp",
        category: "BEBIDA",
        subCat: "WHISKY",
        stock: 23,
        descuento: 0
    },{
        id: 4,
        brand: "Argento",
        name: "Vainilla Para Armar",
        country: "Argentina",
        volume: "40g",
        price: 520,
        img: "https://tabaqueriahorus.com/wp-content/uploads/2019/11/paquete-vainilla.jpg",
        category: "TABACO",
        subCat: "ARMAR",
        stock: 11,
        descuento: 0
    },{
        id: 5,
        brand: "Argento",
        name: "Negro Para Pipa",
        country: "Argentina",
        volume: "40g",
        price: 450,
        img: "https://parainfernalia.com.ar/wp-content/uploads/2017/09/tabaco-para-pipa-negro-precio-argento.jpg",
        category: "TABACO",
        subCat: "PIPA",
        stock: 8,
        descuento: 0
    },{
        id: 6,
        brand: "Van Häasen",
        name: "Natural Para Armar",
        country: "Argentina",
        volume: "30g",
        price: 580,
        img: "https://i2.wp.com/www.donjuantabaco.com.ar/wp-content/uploads/2020/05/don-juan-tabaco-van-haasen-original-blend.jpg?fit=600%2C600&ssl=1",
        category: "TABACO",
        subCat: "ARMAR",
        stock: 15,
        descuento: 0
    }
    
]

export const getProducts = () =>{
    return new Promise((resolve, eject) => {
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}
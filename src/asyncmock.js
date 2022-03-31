const products = [
    {
        id: 1,
        brand: "The Glenlivet",
        name: "Founder's Reserve",
        country: "Escocia",
        volume: "750ml",
        price: 6280,
        img: "https://http2.mlstatic.com/D_NQ_NP_789859-MLA44850220471_022021-V.webp",
        category: "WHISKY",
        stock: 6
    },{
        id: 2,
        brand: "Jack Daniel's",
        name: "Old No. 7",
        country: "Estados Unidos",
        volume: "750ml",
        price: 4721,
        img: "https://http2.mlstatic.com/D_NQ_NP_675836-MLA44850209745_022021-O.webp",
        category: "WHISKY",
        stock: 17
    },{
        id: 3,
        brand: "Johnnie Walker",
        name: "Black Label",
        country: "Escocia",
        volume: "1000ml",
        price: 4765,
        img: "https://http2.mlstatic.com/D_NQ_NP_906543-MLA49287255637_032022-O.webp",
        category: "WHISKY",
        stock: 23
    }
]

export const getProducts = () =>{
    return new Promise((resolve, eject) => {
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}
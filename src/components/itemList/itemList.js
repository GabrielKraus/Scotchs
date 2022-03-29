import Item from "../item/item";

const ItemList = (props) => {
    return(
        <ul>
            {props.products.map(product =><Item id={product.id} img={product.img} brand={product.brand} name={product.name} price={product.price}/>)}
        </ul>
    )
}

export default ItemList
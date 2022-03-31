import Item from "../item/item";

const ItemList = (props) => {
    return(
        <ul>
            {props.products.map(product =><Item key={product.id} img={product.img} brand={product.brand} name={product.name} price={product.price} stock={product.stock}/>)}
        </ul>
    )
}

export default ItemList
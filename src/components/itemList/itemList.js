import Item from "../item/item";
import "./itemList.css"

const ItemList = (props) => {
    return(
        <ul className="itemList">
            {props.products.map(product =><Item key={product.id} id={product.id} img={product.img} brand={product.brand} name={product.name} price={product.price} stock={product.stock}/>)}
        </ul>
    )
}

export default ItemList
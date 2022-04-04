import Item from "../item/item";
import "./itemList.css"

const ItemList = (props) => {
    return (
        <div className="productos">
            <ul className="itemList">
                {props.products.map(product => <Item key={product.id} id={product.id} img={product.img} brand={product.brand} name={product.name} price={product.price} stock={product.stock} />)}
            </ul>
        </div>
    )
}

export default ItemList
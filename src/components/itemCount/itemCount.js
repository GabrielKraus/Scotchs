import React, { Component } from "react";
import './itemCount.css'


class ItemCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }
    addBtn = () => {

    }


    render() {
        return (
            <div className="product">
                <h3>Producto</h3>
                <div className="counter">
                    <button onClick={this.decrement}>-</button>
                    <h2>{this.state.count}</h2>
                    <button onClick={this.increment}>+</button>
                </div>
                <button>Agregar Al carrito</button>
            </div>
        )
    }
}

export default ItemCount
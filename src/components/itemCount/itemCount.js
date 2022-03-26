import React, { Component } from "react";
import './itemCount.css'
import Header from "../header/header";


class ItemCount extends Component {
    stock = 10;
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 0
        }
    }
    increment = () => {
        if(this.state.count < this.stock){
            this.setState({ count: this.state.count + 1 })
        }
    }
    decrement = () => {
        if(this.state.count > 0){
            this.setState({ count: this.state.count - 1 })
        }
    }
    addBtn = () => {
        this.setState({count2: this.state.count})
    }


    render() {
        return (
            <div>
                <Header cartNumber={this.state.count2}/>
                <div className="product">
                    <h3>Producto</h3>
                    <div className="counter">
                        <button onClick={this.decrement}>-</button>
                        <h2>{this.state.count}</h2>
                        <button onClick={this.increment}>+</button>
                    </div>
                    <button onClick={this.addBtn}>Agregar Al carrito</button>
                </div>
            </div>
        )
    }
}

export default ItemCount
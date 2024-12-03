import React, {Component} from 'react'
import { FaTrash } from 'react-icons/fa'

class Order extends Component{
    render(){
        return(
            <div className="item">
                <img src={"./img/" + this.props.item.img} alt="" />
                <h3 className='item-title'>{this.props.item.title}</h3>
                <b>{this.props.item.price}$</b>
                <FaTrash className='delete-item' onClick={() => this.props.onDelete(this.props.item.id)}/>
            </div>
        )
    }
}
export default Order
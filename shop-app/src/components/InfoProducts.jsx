import React, {Component} from 'react'

class InfoProducts extends Component {
    render(){
        return (
            <div className='full-item'>
                <div>
                    <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item) } alt="" />
                    <h3 className='item-title'>{this.props.item.title}</h3>
                    <p>{this.props.item.desc}</p>
                    <b>{this.props.item.price}$</b>
                    <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
                </div>   
            </div>
        )
    }
}

export default InfoProducts
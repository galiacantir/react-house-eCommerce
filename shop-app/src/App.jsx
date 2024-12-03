
// import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react'
import { Items } from './components/Items'
import Categories from './components/Categories'
import InfoProducts from './components/InfoProducts'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      currentItems:[],
      items:  [
        {
          id: 1,
          title: 'White chairs',
          img:'chairs.jpg ',
          desc: 'Lorem ipsum dolor sit amet, constetur adipising',
          category: 'chairs',
          price: '29.99'
        }, 
        {
          id: 2,
          title: 'Black table',
          img:'furniture.jpg ',
          desc: 'Lorem ipsum dolor sit amet, constetur adipising',
          category: 'table',
          price: '59.99'
        }, 
        {
          id: 3,
          title: 'Flower Decoration',
          img:'home.jpg',
          desc: 'Lorem ipsum dolor sit amet, constetur adipising',
          category: 'decoration',
          price: '39.99'
        }, 
        {
          id: 4,
          title: 'Matrimonal Bed',
          img:'living-room.jpg',
          desc: 'Lorem ipsum dolor sit amet, constetur adipising',
          category: 'beds',
          price: '109.99'
        }, 
        {
          id: 5,
          title: 'Vintage teapots',
          img:'teapots.jpg ',
          desc: 'Lorem ipsum dolor sit amet, constetur adipising',
          category: 'chairs',
          price: '29.99'
        }, 
        {
          id: 6,
          title: 'Furniture',
          img:'brick-wall.jpg',
          desc: 'Lorem ipsum dolor sit amet, constetur adipising',
          category: 'decoration',
          price: '29.99'
        }, 
        {
          id: 7,
          title: 'Light',
          img:'living-room1.jpg',
          desc: 'Lorem ipsum dolor sit amet, constetur adipising',
          category: 'lights',
          price: '29.99'
        }, 

      ], 
      showFullItem: false, 
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <InfoProducts onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    )
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }


  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  
  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]} )
  }
}


export default App

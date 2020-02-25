import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import Menu from '../Menu'
import ProductList from '../ProductList'
import CartList from '../CartList'
import Order from '../Order'
import style from './App.css'

class App extends Component {
  constructor(props) {
    super(props)
	// Podemos definir en el state, todos los estados que deseamos actualizar en la pantalla.
    this.state = {
      openOrder: false,
      totalBuy: 0,
      totalSale: 0,
      products: [
        {
          id: 1,
          name: 'ZF R3 2020',
          picture: 'https://www.yamaha-motor.com.mx/images/motos/r3_2020_2.jpg',
          price: 10,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Yamaha',
          count: 5,
        },
        {
          id: 2,
          name: 'FZ25 2020',
          picture: 'https://static.wixstatic.com/media/30d7e1_a10a87206b5241afae63b097ce55dd41~mv2_d_1600_1200_s_2.jpg',
          price: 5,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Yamaha',
          count: 6,
        },
        {
          id: 3,
          name: 'MT03 2020',
          picture: 'https://www.yamaha-motor.com.mx/images/motos/mt03_2020g2.jpg',
          price: 2,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Yamaha',
          count: 1,
        },
        {
          id: 4,
          name: 'CMX500 2020',
          picture: 'https://www.mundomotero.com/wp-content/uploads/2019/01/Honda-Rebel-2020.jpg',
          price: 105000,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Honda',
          count: 6,
        },
        {
          id: 5,
          name: 'Holster Camera Case ',
          picture: 'https://images-na.ssl-images-amazon.com/images/I/91cMeS6xLHL._SX522_.jpg',
          price: 328,
          marca: 'Amazon',
          count: 10,
        },
        {
          id: 6,
          name: 'Olympus M. 40-150mm ',
          picture: 'https://images-na.ssl-images-amazon.com/images/I/81vy-AiCWSL._AC_UL160_SR160,160_.jpg',
          price: 2733,
          marca: 'Olympus',
          count: 4,
        },
        {
          id: 7,
          name: 'Tripié ligero ',
          picture: 'https://images-na.ssl-images-amazon.com/images/G/33/aplusautomation/vendorimages/2ad656e6-6b25-48fd-af65-0a113979bc54.jpg._CB293876631__SR300,300_.jpg',
          price: 372,
          marca: 'Amazon',
          count: 2,
        },
        {
          id: 8,
          name: 'Fujinon XF10-24MMF4 ',
          picture: 'https://images-na.ssl-images-amazon.com/images/I/81tbbvcsJIL._AC_UL160_SR160,160_.jpg',
          price: 25023,
          marca: 'Fujinon',
          count: 4,
        },
        {
          id: 9,
          name: 'Fujifilm X-T2 Mirrorless ',
          picture: 'https://images-na.ssl-images-amazon.com/images/I/81CUJvIrFML._AC_UL160_SR160,160_.jpg',
          price: 50399,
          marca: 'Fujifilm',
          count: 3,
        },
        {
          id: 10,
          name: 'LUMIX G Lens, 25mm',
          picture: 'https://images-na.ssl-images-amazon.com/images/I/71dTWmH4vxL._SL1500_.jpg',
          price: 3262,
          marca: 'Panasonic',
          count: 4,
        },
        {
          id: 11,
          name: 'Olympus OM-D E-M5 ',
          picture: 'https://images-na.ssl-images-amazon.com/images/I/918N6QYcTjL._SL1500_.jpg',
          price: 18688,
          marca: 'Olympus',
          count: 3,
        },
        {
          id: 12,
          name: 'Fujifilm X-T20 ',
          picture: 'https://images-na.ssl-images-amazon.com/images/I/91in%2BYvDGtL._AC_UL160_SR160,160_.jpg',
          price: 32699,
          marca: 'Fujifilm',
          count: 10,
        }
      ],
      shoppingCar: [],
    }
    this.handleSaveProduct = this.handleSaveProduct.bind(this)
    this.handlerAddProduct = this.handlerAddProduct.bind(this)
    this.handlerRemoveProduct = this.handlerRemoveProduct.bind(this)
    this.handlerOpenOrder = this.handlerOpenOrder.bind(this)
    this.handlerClearCart = this.handlerClearCart.bind(this)
  }

  handlerClearCart() {
    this.setState({
      shoppingCar: [],
      totalSale: 0,
      totalBuy: 0,
      openOrder: false
    });
  }

  sumTotalBuy(array) {
    var totalt = 0
    array.forEach(product => totalt += product.order)
    this.setState({totalBuy: totalt})
    //alert(array.length+'=>>'+ this.state.totalBuy +'|'+ totalt);
  }

  sumTotalSale(array) {
    var suma = 0
    array.forEach(product => suma += product.price) //product.price
    this.setState({totalSale: suma})
    //alert(array.length+'=>'+ this.state.totalSale +'|'+ suma);
  }

  handlerRemoveProduct(productId) {
    var statusCopy = Object.assign({}, this.state);
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === productId)
    let shoppingCar = this.state.shoppingCar.find(p => p.id === productId)
    let indexCart = this.state.shoppingCar.findIndex(x => x.id === shoppingCar.id)

    if(shoppingCar == null || shoppingCar==undefined){
      return
    }

    statusCopy.shoppingCar[indexCart].price -= this.state.products[indexProduct].price
    statusCopy.shoppingCar[indexCart].order -= 1
    statusCopy.products[indexProduct].count += 1
    
    if(statusCopy.shoppingCar[indexCart].order===0){
      statusCopy.shoppingCar.splice( indexCart, 1 );
    }

    this.setState(statusCopy)
    this.sumTotalBuy(statusCopy.shoppingCar)
    this.sumTotalSale(statusCopy.shoppingCar)
    
    alert('El producto fue eliminado del carrito de compras');
  }

  handleSaveProduct(productId) {	
  	let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)
    var exist = this.state.shoppingCar.find(p => p.id === productId)

    if(product.count===0){
      alert('Se agotaron los productos');
      return
    }

    if (undefined !== exist && exist !== null) {
      let indexCart = this.state.shoppingCar.findIndex(x => x.id === exist.id)
      this.handlerAddProduct(indexCart, indexProduct)
    }else{
      this.handlerAddNewProduct(indexProduct, product);
    }

  }
  
  handlerAddProduct(indexCart, indexProduct){
    var statusCopy = Object.assign({}, this.state);
    if (statusCopy.products[indexProduct].count !== 0){
      statusCopy.shoppingCar[indexCart].price += this.state.products[indexProduct].price
      statusCopy.shoppingCar[indexCart].order += 1
      statusCopy.products[indexProduct].count -= 1
      this.setState(statusCopy)
      this.sumTotalBuy(statusCopy.shoppingCar)
      this.sumTotalSale(statusCopy.shoppingCar)
    }else{
      alert('Producto inexistente')
    }
  }

  handlerAddNewProduct(indexProduct, product){    
    var productCart = {
      id: product.id,
      name: product.name,
      img: product.picture,
      price: product.price,
      order: 1,
      totalSale: product.price
    }

    var statusCopy = Object.assign({}, this.state); //Ok
    statusCopy.products[indexProduct].count -= 1
    var xx = statusCopy.totalBuy+1
    var xxx = statusCopy.totalSale+statusCopy.products[indexProduct].price
    
    this.setState({
      shoppingCar: statusCopy.shoppingCar.concat([productCart])
      ,statusCopy
    })
    this.setState({totalBuy: xx})
    this.setState({totalSale: xxx})
  }

  handlerOpenOrder(event) {
    event.preventDefault()
    if(!this.state.openOrder){
      this.setState({ openOrder: true })
    }else{
      this.setState({openOrder: false})
    }
  }

  renderOpenOrder() {
    if (this.state.openOrder) {
      return (
        <Order
          totalSale={this.state.totalSale}
          onClearCart={this.handlerClearCart}
        />
      )
    }
  }

  render() {
    return (
      <Container className={style.root}>
        <Menu/>
        <Grid>
          <Grid.Column width={12}>
            <ProductList
              products={this.state.products}
              onSaveProduct={this.handleSaveProduct}
              onIncrementProduct={this.handleSaveProduct}
              onRemoveProduct={this.handlerRemoveProduct}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <CartList
              items={this.state.shoppingCar}
              totalBuy={this.state.totalBuy}
              onOpenOrder={this.handlerOpenOrder}
            />
            {this.renderOpenOrder()}
          </Grid.Column>
        </Grid>
      </Container>
    )
	 alert('renderizado');
  }
 
}

export default App;

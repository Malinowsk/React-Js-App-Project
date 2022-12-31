import React from 'react'
import ItemCount from '../ItemCount'
import './style.css'


const ItemDetail = ({item}) => {

  const { name, description, tipo, price, img, stock } = item;



  return (

    <div className='detail-container'>
      <div className='grid-container'>
        <div className='image-container'>  
          <img src={img} alt="Cerveza"/>  
        </div>
        <div className='data-container'>
          <h1> {name} </h1>
          <div className='descripcion-container'>
            <p> {description} </p>
            <p> Estilo : {tipo} </p>
            <p> Precio : $ {price} </p>
            <p> Stock : {stock} unidades</p>
          </div>
          <div className='Itemcount-container'>
            <ItemCount stock={stock} initial={0} onAdd={() => alert('Agregado al carrito')}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
import React, {useState} from "react";
import './style.css'

function ItemCount({ stock, initial, onAdd }) {

  const [contador, setContador] = useState(initial);
  const resta = () => {
    if (contador > 1) setContador(contador - 1);
  };

  const suma = () => {
    if (contador < stock) setContador(contador + 1);
  };

  const onConfirm = () => {
    onAdd(contador)
  }

  return (
      <div className="Itemcount">
        <div className='ItemCount-add'>
          <button className="removeButton" onClick={resta}>  
            {" "}-{" "} 
          </button>
          <strong className="count"> {contador} </strong>
          <button className="addButton"  onClick={suma} 
            disabled={contador === stock ? true : null }>
              {" "}+{" "}
          </button>
        </div>
        <button className='addCarrito' onClick={onConfirm}> Agregar al carrito </button>
      </div>
  );
}

export default ItemCount;
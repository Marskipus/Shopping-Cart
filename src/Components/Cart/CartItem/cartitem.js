import React from 'react'

const CartItem = ({itemName, index, removeFromCart}) => {
  return (
    <div>
        <div>
            <p>{itemName}</p>
            <p>{index}</p>
            <button value={index} onClick={removeFromCart}>Remove</button>
        </div>
    </div>
  )
}

export default CartItem
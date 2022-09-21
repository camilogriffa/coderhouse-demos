import { useState } from 'react';
import './styles.module.css';
const ItemCount = ({stock, item, initial = 1, onAdd, setProduct}) => {
    const [count, setCount] = useState(initial)
    const addCounter = () => {
        count < stock && setCount(count + 1)
    }
    const subtractCounter = () => {
        count > initial && setCount(count - 1)
    }
    return (
        <div className='counter-container'>
            <p className='counter'>{count}</p>
            <div className='button-container'>
                <button className='button' onClick={subtractCounter}>-</button>
                <button className='button' onClick={addCounter}>+</button>
            </div>
            <button className='button button-buy' onClick={() => {
                onAdd(item, count)
                setProduct(true)
            }}>Añadir al carrito</button>
        </div>
    )
}
export default ItemCount;
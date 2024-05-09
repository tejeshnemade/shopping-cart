import React, { useEffect, useState } from 'react'
import { AddVal } from '../Redux/ItemSlice';
import { useDispatch, useSelector } from 'react-redux';


function Product() {

  const [item, setItem] = useState([]);
  const card = useSelector(state => state.Item.value)

  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then(Response => Response.json()).then(data => setItem(data))
  }, [])

  let add = (ob) => {
    let result = card.some(obj => obj.id === ob.id)
    if (result === false) {

      dispatch(AddVal(ob))
    }

  }


  return (
    <>
      <h1 className='text-center'>Product</h1>
      {item.map(ob => (
        <div className="row">
          <div className="col-md-3">
            <div className="card text-center mt-3">
              <img src={ob.image} style={{ width: '150px', height: '150px', marginLeft: '180px' }} />
              <div class="card-body">
                <h5 class="card-title">{ob.title}</h5>
                <p class="card-text">Price : {ob.price}</p>
                <button class="btn btn-primary" onClick={() => add(ob)} >Add To Card</button>
              </div>

            </div>
          </div>
        </div>

      ))}
    </>
  )
}

export default Product
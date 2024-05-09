import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incrementQty,dicrementQty,RemoveItem } from '../Redux/ItemSlice'

function Cart() {
 
  const card = useSelector(state=>state.Item.value)
  const dipatch =useDispatch()
  
  const totalAmount = card.reduce((acc, curr) => acc + curr.products.price * curr.Qty, 0);




  return (
    <>
     <h1 className='text-center mb-5'>Cart</h1>
     <table className='table'>
      <thead>
        <tr>
          <th>S.no.</th>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quntity</th>
          <th>Amount</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {card.map((ob,index)=><tr>
          <td>{index+1}</td>
          <td><img src={ob.products.image} style={{height:'100px', width:'100px'}}/></td>
          <td>{ob.products.title}</td>
          <td>{ob.products.price}</td>
          <td><button className='btn btn-primary' onClick={()=>dipatch(dicrementQty(ob.products.id))}>-</button>&nbsp; {ob.Qty} &nbsp;<button className='btn btn-primary' onClick={()=>dipatch(incrementQty(ob.products.id))}>  + </button></td>
          <td>{ob.products.price * ob.Qty}</td>
          <td><button className='btn btn-danger' onClick={()=>dipatch(RemoveItem(ob.products.id))}>Remove</button></td>
        </tr>)}
      </tbody>
     </table>
       <div className="text-end">
        <p className='fs-2' style={ {marginRight:'300px'}}>Total Amount : {totalAmount}</p>
       </div>
    </>
  )
}

export default Cart
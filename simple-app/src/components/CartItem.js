import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increase, decrease, removeItem } = value;
  return (

  
    <tr>
      <td>
        <img src={img}   style={{width:"5rem", height:"5rem"}}
               className="img-fluid"
               alt="product" />
      </td>
      <td>{title}</td>
      <td> {count}</td>
      <td className="text-right">Rp. {price}</td>
      <td class="">
        {" "}
        <span className="btn btn-black mx-1" onClick={() => decrease(id)}>
          -
        </span>
        <span className="btn btn-black mx-1">{count}</span>
        <span className="btn btn-black mx-1" onClick={() => increase(id)}>
          +
        </span>
      </td>
      <td class="">
   
        <button class="btn btn-sm btn-danger" onClick={()=>removeItem(id)}>
          <i class="fa fa-trash"></i>{" "}
        </button>{" "}
      </td>
    </tr>
  );
}

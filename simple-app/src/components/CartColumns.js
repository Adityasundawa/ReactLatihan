import React from "react";

export default function CartColumns() {
  return (
  
    <thead>
      <tr>
        <th scope="col"> </th>
        <th scope="col">Product</th>

        <th scope="col" class="text-center">
        QTY
        </th>
        <th scope="col" class="text-right">
          Price
        </th>
        <th> Remove</th>
        <th> Total </th>
      </tr>
    </thead>
  );
}

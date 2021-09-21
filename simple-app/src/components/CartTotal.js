import React from "react";
import { Link } from "react-router-dom";

export default function CartColumns({ value }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <Link to="/">
        <button
          className="mt-4 btn btn-danger text-uppercase mb-3 px-5"
          type="button"
          onClick={() => clearCart()}
        >
          Hapus Cart
        </button>
      </Link>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Sub-Total</td>
        <td class="text-right"> Rp. {cartSubtotal}</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Tax</td>
        <td class="text-right">Rp. {cartTax}</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <strong>Total</strong>
        </td>
        <td class="text-right">
          <strong>Rp. {cartTotal}</strong>
        </td>
      </tr>
    </React.Fragment>
  );
}

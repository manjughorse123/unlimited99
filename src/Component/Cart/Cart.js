import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

function Cart(props) {
  const cartItem = (
    <ul className={classes["cart-item"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.09 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total Span</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}></div>
      <button className={classes["button--alt"]}>Close </button>
      <button className={classes.button}> Order </button>
      <div></div>
    </Modal>
  );
}
export default Cart;

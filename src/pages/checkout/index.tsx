import { useContext, useState } from "react";
import { FiShoppingCart, FiCheck } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import CheckoutItem from "../../components/checkoutItem";
import Modal from "../../components/finishModal";
import { CartContext } from "../../context/cartContext";

import {
  CheckoutFooter,
  CheckoutHeader,
  CheckoutItems,
  Container,
  InternalContainer,
} from "./style";

function Checkout() {
  const navigate = useNavigate();
  const { state, actions } = useContext(CartContext);
  const products = state.items;

  const total = products
    ? products.reduce(
        (ac, product) => (ac += product.quantity! * product.price),
        0
      )
    : 0;

  const cartActive = products?.length ? "active" : "";
  const [completedPurchase, setCompletedPurchase] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleReset = () => {
    handleCleanItems();
    setCompletedPurchase("");
    navigate("/");
  };
  const handleCleanItems = () => actions?.cleanCart();
  const handleChangeModalState = () => setModalOpen(!modalOpen);
  const handleFinalizePurchase = () => {
    if (products?.length) {
      handleChangeModalState();
      return setCompletedPurchase("active");
    }
    setCompletedPurchase("");
    setErrorMessage(true);
    setTimeout(() => {
      setErrorMessage(false);
    }, 1000 * 4 /*5 segundos*/);
  };

  return (
    <Container>
      <InternalContainer>
        <CheckoutHeader>
          <Link to="/">
            <h1>Cart</h1>
          </Link>
          <div>
            <span className={cartActive}>
              <FiShoppingCart />
            </span>
            <span className={completedPurchase}>
              <FiCheck />
            </span>
          </div>
        </CheckoutHeader>
        <CheckoutItems>
          {!products?.length && (
            <h4 className="defaultMessage">Carrinho vazio :3</h4>
          )}
          {products &&
            products.map((product) => (
              <CheckoutItem key={product.id} {...product} />
            ))}
        </CheckoutItems>
        <CheckoutFooter>
          <span className="total">Total R$ {total.toFixed(2)}</span>
          <div className="buttonsContainer">
            <button onClick={handleCleanItems}>Limpar Items</button>
            <button onClick={handleFinalizePurchase}>
              Finalizar Compras
              {errorMessage && (
                <span className="errorMessage">O carrinho está vazio!!</span>
              )}
            </button>
          </div>
        </CheckoutFooter>
      </InternalContainer>
      <Modal
        isOpen={modalOpen}
        handleOpenModal={handleChangeModalState}
        handleExecute={handleReset}
      />
    </Container>
  );
}
export default Checkout;

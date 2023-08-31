import React from "react";
import Button from "./Button";
import "./Product.css";

export default (props) => {
  const { code, brand, promoValue } = props.data;
  const value =
    props.data.value != null && props.data.value != ""
      ? props.data.value
      : "0.00";
  const [stock, setStock] = React.useState(props.data.stock);
  const productBuy = () => {
    return stock > 0 ? setStock(stock - 1) : 0;
  };

  return (
    <React.Fragment>
      <p>Código: {code}</p>
      <p>Marca : {brand}</p>
      <p>Estoque: {stock}</p>
      {promoValue != "" &&
      promoValue != null &&
      parseFloat(promoValue) < parseFloat(value) ? (
        <React.Fragment>
          {" "}
          <p>
            De :{" "}
            <span style={{ textDecoration: "line-through" }}>
              R${value.replace(".", ",")}
            </span>
          </p>
          <p>Por : R${promoValue.replace(".", ",")}</p>
        </React.Fragment>
      ) : (
        <p>Valor : R${value.replace(".", ",")}</p>
      )}
      <div className="buy">
        <Button text="Comprar" callback={productBuy}></Button>
      </div>
    </React.Fragment>
  );
};

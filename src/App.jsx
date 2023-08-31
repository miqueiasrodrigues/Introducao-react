import React from "react";
import Card from "./components/layout/Card";
import Product from "./components/Product";
import "./App.css";
import products from "./data/products";

export default (_) => {
  return (
    <React.Fragment>
      <div className="app">

        <div className="app-section">
          <p>Produtos</p>
        </div>
        <div className="cards">
          {products.map((product) => {
            const condition =
              product.promoValue != "" &&
              product.promoValue != null &&
              parseFloat(product.promoValue) < parseFloat(product.value);
            return condition ? (
              false
            ) : (
              <React.Fragment key={product.code}>
                <Card>
                  <Product title={product.title} data={product} />
                </Card>
              </React.Fragment>
            );
          })}
        </div>
        <div className="app-section">
          <p>Produtos em oferta</p>
        </div>
        <div className="cards">
          {products.map((product) => {
            const condition =
              product.promoValue != "" &&
              product.promoValue != null &&
              parseFloat(product.promoValue) < parseFloat(product.value);
            return condition ? (
              <React.Fragment key={product.code}>
                <Card >
                  <Product title={product.title} data={product} />
                </Card>
              </React.Fragment>
            ) : (
              false
            );
          })}
        </div>
       
      </div>
    </React.Fragment>
  );
};

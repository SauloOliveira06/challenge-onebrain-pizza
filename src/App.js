import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import { Banner } from "./components/banner/Banner";
import { Menu } from "./components/Menu/Menu";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { PizzaDialog } from "./components/Dialog/PizzaDialog";
import { Order } from "./components/Order/Order";
import { useOpenPizza } from "./components/hooks/useOpenPizza";
import { useOrders } from "./components/hooks/useOrders";

function App() {
  const openPizza = useOpenPizza();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <PizzaDialog {...openPizza} {...orders} />
      <NavBar />
      <Order {...orders} />
      <Banner />
      <Menu {...openPizza} />
    </>
  );
}

export default App;

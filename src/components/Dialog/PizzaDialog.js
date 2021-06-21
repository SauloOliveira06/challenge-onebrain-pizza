import React from "react";
import styled from "styled-components";
import { PizzaLabel } from "../Menu/PizzaGrid";
import { pizzaRed } from "../../Styles/colors";
import { Title } from "../../Styles/title";

const Dialog = styled.div`
  width: 500px;
  background-color: #fff;
  position: fixed;
  top: 75px;
  z-index: 10;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 15px 0px black;
  height: 60px;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: #fff;
  height: 20px;
  border-radius: 3px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${pizzaRed};
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: #000;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => (img ? `background-image: url(${img});` : `min-height: 75px;`)}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(PizzaLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;
  top: ${({ img }) => (img ? `100px` : `20px`)};
`;

export function PizzaDialog({ openPizza, setOpenPizza, setOrders, orders }) {
  function close() {
    setOpenPizza();
  }
  if (!openPizza) return null;

  const order = {
    ...openPizza
  };
  function addToOrder() {
    setOrders([...orders, order]);
    close();
  }
  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openPizza.img}>
          <DialogBannerName>{openPizza}</DialogBannerName>
        </DialogBanner>
        <DialogContent />
        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>Fazer pedido</ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}

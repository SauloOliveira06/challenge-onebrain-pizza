import React from "react";
import styled from "styled-components";
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from "../Dialog/PizzaDialog";

const OrderStyled = styled.div`
  position: fixed;
  right: 0;
  top: 50px;
  width: 340px;
  background-color: #fff;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0 5px 5px grey;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
  padding: 40px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

export function Order({ orders }) {
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Sem pedidos.</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Seu pedido: </OrderContainer>
          {orders.map((index, order) => (
            <OrderContainer key={index}>
              <OrderItem>
                <div>1</div>
                <div>{order.name}</div>
                <div>{order.price}</div>
              </OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>Finalizar Pedido</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}

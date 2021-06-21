import React from "react";
import styled from "styled-components";
import { pizzas } from "../../Data/PizzaData";
import { Pizza, PizzaGrid, PizzaLabel } from "../Menu/PizzaGrid";
import { formatBonus } from "../../Data/PizzaData";

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0 400px 50px 20px;
`;

export function Menu({ setOpenPizza }) {
  return (
    <MenuStyled>
      {Object.entries(pizzas).map(([sectionName, pizzas]) => (
        <>
          <h1>Cardápio do dia</h1>
          <PizzaGrid>
            {pizzas.map((pizza, index) => (
              <Pizza
                img={pizza.img}
                onClick={() => {
                  setOpenPizza(pizza);
                }}
                key={index}
              >
                <PizzaLabel>
                  <div>{pizza.name}</div>
                  <div>{formatBonus(pizza.bonus)} de bônus</div>
                </PizzaLabel>
              </Pizza>
            ))}
          </PizzaGrid>
        </>
      ))}
    </MenuStyled>
  );
}

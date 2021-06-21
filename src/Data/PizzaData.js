export function formatBonus(bonus) {
  return bonus.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export const pizzaItem = [
  {
    name: "Pizza de Queijo",
    img: "/img/pizza_queijo.png",
    section: "Pizza",
    bonus: 1,
  },
  {
    name: "Pizza Portuguesa",
    img: "/img/pizza_portuguesa.jpg",
    section: "Pizza",
    bonus: 3,
  },
  {
    name: "Pizza Peperonni",
    img: "/img/pizza_pep.jpg",
    section: "Pizza",
    bonus: 5,
  },
  {
    name: "Pizza de Camarão",
    img: "/img/pizza_camarao.jpg",
    section: "Pizza",
    bonus: 3,
  },
  {
    name: "Pizza de Catupiry",
    img: "/img/pizza_catupiry.png",
    section: "Pizza",
    bonus: 5,
  },
  {
    name: "Pizza de Chocolate",
    img: "/img/pizza_chocolate.jpg",
    section: "Pizza",
    bonus: 4,
  },
  {
    name: "Pizza de Liquidificador  ",
    img: "/img/pizza_liquidificador.jpg",
    section: "Pizza",
    bonus: 1,
  },
  {
    name: "Pizza de Calabresa  ",
    img: "/img/pizza_calabresa.jpg",
    section: "Pizza",
    bonus: 1,
  },
];

export const pizzas = pizzaItem.reduce((res, pizza) => {
  if (!res[pizza.section]) {
    res[pizza.section] = [];
  }
  res[pizza.section].push(pizza);
  return res;
}, {});

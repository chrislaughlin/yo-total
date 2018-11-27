const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const getTotal = dishes => {
  return dishes
    .map(dish => dish.price)
    .reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
    .toFixed(2);
};

const getCountByColor = (color, dishes) =>
  dishes.filter(dish => dish.color === color).length;

export { uuidv4, getTotal, getCountByColor };

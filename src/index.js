import React, { Component, Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DishList from "./dishList";
import Dish from "./dish";
import Toast from "./toast";

import * as utils from "./utils";

import "./styles.css";
const DISHES = {
  black: 2.2,
  green: 2.1,
  blue: 2.8,
  purple: 3.7,
  orange: 4.2,
  pink: 4.6,
  grey: 5.2,
  yellow: 6.0
};

const Dishes = ({ dishes, setDishes }) => {
  return Object.keys(DISHES).map(key => {
    return (
      <Fragment>
        <Dish
          color={key}
          onClick={onChooseDish(key, dishes, setDishes, undoAdd)}
        />
        {utils.getCountByColor(key, dishes)}
      </Fragment>
    );
  });
};

const onChooseDish = (color, dishes, setDishes, undoAdd) => () => {
  const id = utils.uuidv4();
  setDishes([
    ...dishes,
    {
      color,
      price: DISHES[color],
      id
    }
  ]);
  toast(({ closeToast }) => {
    return (
      <Toast
        color={color}
        id={id}
        onUndo={undoAdd(id, closeToast, dishes, setDishes)}
        closeToast={closeToast}
      />
    );
  });
};

const undoAdd = (id, closeToast, dishes, setDishes) => () => {
  setDishes(dishes.filter(dish => dish.id !== id));
  closeToast();
};

const AppWithHooks = () => {
  const [dishes, setDishes] = useState([]);

  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
      <h1>YO! YO!</h1>
      <h2>Total: £{utils.getTotal(dishes)}</h2>
      <DishList>
        <Dishes dishes={dishes} setDishes={setDishes} />
      </DishList>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithHooks />, rootElement);

import React from "react";
import styled from "styled-components";

const Dish = styled.li`
  display: block;
  margin: auto;
  width: 16rem;
  height: 5rem;
  background: ${props => props.color};
  border-radius: 0.2rem 0.2rem 3rem 3rem;
  border-bottom: 0.3rem solid #ccc;
  z-index: 0;
  margin: 20px;
  transition: all 0.2s ease-in-out;
  :active {
    transform: scale(1.1);
  }
  :focus {
    transform: scale(1.1);
  }
`;

export default Dish;

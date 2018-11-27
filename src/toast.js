import React from "react";
import styled from "styled-components";

const ToastBowColor = styled.span`
  color: ${props => props.color};
`;
const ToastUndo = styled.span`
  color: #eb4105;
`;
const Toast = ({ color, onUndo }) => {
  return (
    <div>
      <ToastBowColor color={color}>A {color} bowl</ToastBowColor>
      <span>was added to your total.</span>
      <ToastUndo onClick={onUndo}>UNDO</ToastUndo>
    </div>
  );
};

export default Toast;

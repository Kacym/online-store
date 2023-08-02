import React from "react";
import { styled } from "styled-components";
import Button from "../UI/Button";

const ProductItem = ({ counter, dispatch, deleteHandler, product }) => {
  const incrementFunc = () => {
    dispatch({ type: "INCREMENT" });
    product.amount += 1;
    product.price = product.basePrice * product.amount;
    console.log(product.price);
    localStorage.setItem("todos", JSON.stringify(product));
  };

  const decrementFunc = () => {
    dispatch({ type: "DECREMENT" });
    if (product.amount > 1 && product.price > product.basePrice) {
      product.amount -= 1;
      product.price -= product.basePrice;
      localStorage.setItem("todos", JSON.stringify(product));
    }
  };
  const handleDelete = () => {
    deleteHandler(product.id);
  };

  return (
    <StyledProductItem>
      <h2>{product.number}</h2>
      <ProductImgContainer>
        <ProductImg src={product.img} alt={product.title} />
      </ProductImgContainer>
      <ProductInfo>
        <span>{product.title}</span>
        <span>${product.price}</span>
        <PlusAndMinusButtonsContainer>
          <Button
            onClick={decrementFunc}
            bgColor="#00CED1"
            h="25px"
            w="25px"
            title="-"
          />
          <span>{product.amount}</span>
          <Button
            onClick={incrementFunc}
            bgColor="#00CED1"
            h="25px"
            w="25px"
            title="+"
          />
        </PlusAndMinusButtonsContainer>
        <Button onClick={handleDelete} title="remove" bgColor="red" />
      </ProductInfo>
    </StyledProductItem>
  );
};

const StyledProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;

  border-top: 3px solid gray;

  width: 100%;

  padding: 0px 20px;
`;

const ProductImgContainer = styled.div`
  width: 150px;

  margin-right: 50px;
`;

const ProductImg = styled.img`
  width: 90%;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 70%;
`;

const PlusAndMinusButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70px;
`;
export default ProductItem;

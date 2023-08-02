import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Button from "../UI/Button";

const ProductCard = ({ addNewProductHandler, product }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    if (!isAdded) {
      addNewProductHandler(product);
      setIsAdded(true);
    }

  };

  useEffect(() => {
    // Получение данных из localStorage
    const storedTodos = localStorage.getItem("todos");
    if (!storedTodos) {
      setIsAdded(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <StyledProductCard>
      <CardImgContainer>
        <StyledImg src={product.img} alt={product.title} />
      </CardImgContainer>
      <h5>
        {product.title} - $ {product.price}
      </h5>
      <Button
        onClick={handleClick}
        bgColor={isAdded ? "#74C686" : "#3fd35f"}
        title={isAdded ? "Added" : "Add"}
      />
    </StyledProductCard>
  );
};

const StyledProductCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 120px;
  height: 230px;

  border: solid;
  border-radius: 9px;
  border: solid 1px gray;

  margin: 20px auto 0;

  background-color: white;
`;

const CardImgContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 100px;
`;
const StyledImg = styled.img`
  width: 100%;
`;
export default ProductCard;

import { styled } from "styled-components";
import "./App.css";
import { products } from "./utils/products";
import ProductCard from "./components/product-cards/ProductCard";
import { useEffect, useReducer, useState } from "react";
import ProductItem from "./components/product-item/ProductItem";

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, count: state.count + 1 };
    }
    case "DECREMENT": {
      return { ...state, count: state.count - 1 };
    }
    default:
      return state;
  }
};

const initialState = {
  count: 0,
};

function App() {

  useEffect(() => {
    // Получение данных из localStorage
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const [counter, dispatch] = useReducer(reducerFunc, initialState);

  const [todos, setTodos] = useState([]);

  const getTotalPrice = () => {
    if(!todos || todos.length === 0) {
      return 0;
    }

    const totalPrice = todos.reduce(
      (total, product) => total + product.price,
      0
    );
    return totalPrice;
  };

  const addNewProductHandler = (product) => {
    const newProduct = {
      ...product,
      id: Math.floor(Math.random() * 100000),
    };
    setTodos((prevTodos) => {
      const updateTodos = [...prevTodos, newProduct];
      localStorage.setItem("todos", JSON.stringify(updateTodos));
      return updateTodos
    });
  };

  const deleteProductHandler = (id) => {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos))
  };


  return (
    <div className="App">
      <CardsList>
        {products.map((product) => {
          return (
            <ProductCard
              addNewProductHandler={addNewProductHandler}
              key={product.id}
              product={product}
            />
          );
        })}
      </CardsList>

      <ProductList>
        <StyledTable>
          <HashTag>#</HashTag>
          <Product>Product</Product>
          <ProductTitle>Product name</ProductTitle>
          <ProductPrice>Product Price</ProductPrice>
          <Quantity>Quantity</Quantity>
          <h3>remove</h3>
        </StyledTable>
        {todos.length > 0 ? (
          todos.map((product) => {
            return (
              <ProductItem
                counter={counter}
                dispatch={dispatch}
                deleteHandler={deleteProductHandler}
                key={product.id}
                product={product}
              />
            );
          })
        ) : (
          <h2>The product list is empty</h2>
        )}
      </ProductList>
      <h2>TOTAL: ${getTotalPrice()}</h2>
    </div>
  );
}

const StyledTable = styled.div`
  width: 100%;
  display: flex;
  margin: 0;
  border-top: 2px solid gray;
`;

const HashTag = styled.h3`
  margin-left: 2%;
  margin-right: 8%;
`;
const Product = styled.h3`
  margin-right: 10%;
`;

const ProductTitle = styled.h3`
  margin-right: 6%;
`;

const ProductPrice = styled.h3`
  margin-right: 9%;
`;

const Quantity = styled.h3`
  margin-right: 15%;
`;

const CardsList = styled.ul`
  display: flex;
  list-style: none;
  width: 50%;
  margin: 0 auto;
`;

const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  margin-top: 20px;

  list-style: none;
`;
export default App;

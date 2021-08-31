import React, {useState} from "react";
import {useQuery} from "react-query";

//Components
import Card from "./Card/Card"
import Drawer from "@material-ui/core/Drawer"
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Wrapper, StyledButton } from './App.styles';
import Cart from "./Cart/Cart";
import Navbar from "./Navbar";
//styles //#endregion


//Types

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();



const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts)

  console.log(data)


  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. Is the item already added in the cart ?
      const isItemInCart = prev.find(item => item.id === clickedItem.id)
      if(isItemInCart){
        return prev.map(item => (
          item.id === clickedItem.id ? {...item, amount: item.amount + 1} : item
        ))
      }

      //First time the item is added

      return [...prev, {...clickedItem, amount: 1 }]
    })
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };
  const handleCloseCart = () => {
    setCartOpen(false)
  }

  if(isLoading) return <LinearProgress />

  if(error) return <div>Something went wrong</div>
  return (
    <>
    <Navbar handleRemoveFromCart={handleRemoveFromCart} handleAddToCart={handleAddToCart}  cartItems={cartItems}/>
    
    <Wrapper>
 

    <div className="card-container">
       {data?.map(item => (
       
          <Card item={item} handleAddToCart={handleAddToCart}/>
       
       ))}
       </div>
    </Wrapper>
    </>
  );
}

export default App;

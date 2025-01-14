import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [
    { id: 1, name: "Wireless Headphones", price: 49.99, quantity: 0 },
    { id: 2, name: "Running Shoes", price: 79.99, quantity: 0 },
    { id: 3, name: "Smartphone", price: 699.99, quantity: 0 },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) product.quantity++;
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product && product.quantity > 0) product.quantity--;
    },
  },
});

export const { incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;

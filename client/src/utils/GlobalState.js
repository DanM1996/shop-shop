import { useProductReducer } from "./reducers";
import React, { createContext, useContext } from 'react';

const StoreContext = createContext();
// Provider takes the data in the state and makes it available as a prop to all components
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };
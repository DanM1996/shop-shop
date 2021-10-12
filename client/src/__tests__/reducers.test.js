// import our actions to test
import { UPDATE_CATEGORIES, UPDATE_PRODUCTS, UPDATE_CURRENT_CATEGORY } from "../utils/actions";
import { reducer } from "../utils/reducers";

// create a sample of what our global state will look like
const initialState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1'
}

test('UPDATE_PROCUCTS', () => {
    let newState = reducer(initialState, {
        type: UPDATE_PRODUCTS,
        products: [{}, {}]
    })
    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
});

test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CATEGORIES,
        categories: [{}, {}]
    })
    expect(initialState.categories.length).toBe(1);
    expect(newState.categories.length).toBe(2);
});

test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: '2'
    })
    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
})
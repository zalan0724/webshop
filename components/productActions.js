import {
    addAsyncCart,
    addToCart,
    removeAsyncCart,
    removeFromCart,
} from '../features/cart/cartItemsSlice';
import { addMessage } from '../features/popup/popupSlice';
import { addToCompare } from '../features/compare/comparedItemsSlice';

export const addProductToCart = async (session, product, dispatch) => {
    if (session) {
        dispatch(addAsyncCart({ userId: session.user.id, product }));
    } else {
        dispatch(addToCart(product));
    }
    dispatch(addMessage('Item added to the cart'));
};

export const removeItemFromCart = (session, productIndex, dispatch) => {
    if (session) {
        dispatch(removeAsyncCart({ userId: session.user.id, productIndex }));
    } else {
        dispatch(removeFromCart(productIndex));
    }
};

export const addProductToCompare = (product, dispatch) => {
    dispatch(addToCompare({ ...product }));
    dispatch(addMessage('Item added to compare'));
};

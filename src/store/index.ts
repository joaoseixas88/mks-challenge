import { legacy_createStore as createStore, Store, applyMiddleware } from "redux";
import rootReducer from "./ducks/rootReducer";
import { ProductsState } from "./ducks/products/types";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./ducks/rootSaga";
import { CartState } from "./ducks/cart/types";

export interface AppState {
  products: ProductsState;
	cart: CartState
}


const sagaMiddleware = createSagaMiddleware()

const store: Store<AppState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export { store };

export type RootState = ReturnType<typeof store.getState>





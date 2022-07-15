import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { api } from "../../../services/api";
import { productsFailure, productsSuccess } from "./actions";

export function* load() {
  try {
    const response: AxiosResponse = yield call(
      api.get,
      "products?page=1&rows=10&sortBy=id&orderBy=DESC"
    )			
    yield put(productsSuccess(response.data.products));
  } catch (err) {
    yield put(productsFailure());
  }
}

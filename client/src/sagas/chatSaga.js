import { put } from "redux-saga/effects";
import {
  createMessageError,
  createMessageSuccess,
  getMessageSuccess,
  getMessageError,
} from "../actions/chatActionsCreator";
import * as API from "../api";

export function* createMessageSaga(action) {
  try {
    const {
      data: { data },
    } = yield API.createMessage(action.payload.message);
    yield put(createMessageSuccess(data));
  } catch (error) {
    yield put(createMessageError(error));
  }
}

export function* getMessagesSaga(action) {
  try {
    const {
      data: { data },
    } = yield API.getAllMessages();
    yield put(getMessageSuccess(data));
  } catch (error) {
    yield put(getMessageError(error));
  }
}

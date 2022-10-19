import produce from "immer";
import ACTIONS from "../actions";

const initialState = {
  isFetching: false,
  error: null,
  messages: [],
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CREATE_MESSAGE_REQUEST:
    case ACTIONS.GET_MESSAGES_REQUEST: {
      return produce(state, (draftState) => {
        draftState.isFetching = true;
      });
    }

    case ACTIONS.CREATE_MESSAGE_ERROR:
    case ACTIONS.GET_MESSAGES_ERROR: {
      const {
        payload: { error },
      } = action;
      return produce(state, (draftState) => {
        draftState.error = error;
        draftState.isFetching = false;
      });
    }
    case ACTIONS.CREATE_MESSAGE_SUCCESS: {
      const {
        payload: { message },
      } = action;
      return produce(state, (draftState) => {
        draftState.isFetching = false;
        draftState.messages.push(message);
        draftState.error = null;
      });
    }
    case ACTIONS.GET_MESSAGES_SUCCESS: {
      const {
        payload: { messages },
      } = action;
      return produce(state, (draftState) => {
        draftState.isFetching = false;
        draftState.messages.push(...messages);
        draftState.error = null;
      });
    }
    default:
      return state;
  }
}

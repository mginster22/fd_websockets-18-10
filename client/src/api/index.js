import axios from "axios";
import { io } from "socket.io-client";
import { SOCKET_EVENTS } from "../configs";
import {
  createMessageSuccess,
  createMessageError,
} from "../actions/chatActionsCreator";
import store from "../store";
const baseUrl = "localhost:5000";

const httpClient = axios.create({
  baseURL: `http://${baseUrl}`,
});

const socket = io(`ws://${baseUrl}`, { transports: ["websocket"] });

export const getAllMessages = () => httpClient.get("/");

export const createMessage = (message) =>
  socket.emit(SOCKET_EVENTS.NEW_MESSAGE, message);

socket.on(SOCKET_EVENTS.NEW_MESSAGE, (message) => {
  store.dispatch(createMessageSuccess(message));
});
socket.on(SOCKET_EVENTS.NEW_MESSAGE_ERROR, (error) => {
  store.dispatch(createMessageError(error));
});

import { v4 as uuidv4 } from "uuid";
import { get, put, set, del } from "./_idbMessages";

export const createNewMessage = (value) => {
  const id = uuidv4();
  const date = new Date();

  const newMessage = JSON.stringify({
    id,
    header: "",
    createdOn: date.toLocaleString(),
    body: value,
  });

  return { newMessage, id };
};

export const getMessage = async (id) => {
  const matchedIdbRecord = await get(id);
  const message = JSON.parse(matchedIdbRecord);
  return message;
};

export const updateMessage = async (id, value) => {
  const message = await getMessage(id);
  message.header = value;

  put(JSON.stringify(message), id);
};

export const copyCardHandler = async (header, body) => {
  if (header !== "") {
    await navigator.clipboard.writeText(`${header}. ${body}`);
    return;
  }
  await navigator.clipboard.writeText(body);
};

export const captureInputToUpdate = (id, input) => {
  updateMessage(id, input);
};

export const deleteCard = (messageid) => {
  del(messageid);
};

export const duplicateCard = async (messageid, fetchData) => {
  const { body } = await getMessage(messageid);
  const { newMessage, id } = createNewMessage(body);
  set(newMessage, id);
  fetchData(newMessage);
};

export const createCard = (value, fetchData) => {
  const { newMessage, id } = createNewMessage(value);
  set(newMessage, id);
  fetchData(newMessage);
};

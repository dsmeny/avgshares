import { v4 as uuidv4 } from "uuid";
import { get, put } from "./_idbMessages";

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

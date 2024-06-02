import { openDB } from "idb";

async function doDatabaseStuff() {
  return await openDB("key-store", 1, {
    upgrade(db) {
      db.createObjectStore("messages");
    },
  });
}

export const get = async (key) => {
  const db = await doDatabaseStuff();
  return await db.get("messages", key);
};

export const set = async (val, key) => {
  const db = await doDatabaseStuff();
  return await db.put("messages", val, key);
};

export const put = async (val, key) => {
  const db = await doDatabaseStuff();
  await db.put("messages", val, key);
};

export const del = async (key) => {
  const db = await doDatabaseStuff();
  return await db.delete("messages", key);
};

export const clear = async () => {
  const db = await doDatabaseStuff();
  return await db.clear("messages");
};

export const keys = async () => {
  const db = await doDatabaseStuff();
  const keys = await db.getAllKeys("messages");
  return keys;
};

export const values = async () => {
  const db = await doDatabaseStuff();
  const messages = await db.getAll("messages");
  return messages;
};

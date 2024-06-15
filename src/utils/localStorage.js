import { localStorageKeys } from "./enums";

const { OPTION } = localStorageKeys;

export const updateLocalStorage = (selectedOption) => {
  localStorage.setItem(OPTION, selectedOption);
};

export const getLocalStorage = () => localStorage.getItem(OPTION);

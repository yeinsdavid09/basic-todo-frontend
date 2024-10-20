import { useState } from "react";

export function useLocalStorage(keyword, initialValue) {
  //#region ----------------------------------- Variables ---------------------------------

  const [item, setItem] = useState(() => {
    const storageItem = localStorage.getItem(keyword);
    return storageItem ? JSON.parse(storageItem) : initialValue;
  });

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  function saveItem(value) {
    setItem(value);
    localStorage.setItem(keyword, JSON.stringify(value));
  }

  function getItem() {
    const storageItem = localStorage.getItem(keyword);
    return storageItem ? JSON.parse(storageItem) : null;
  }

  function removeItem() {
    localStorage.removeItem(keyword);
  }

  //#endregion

  //#region --------------------------------- Return ---------------------------------

  return [item, saveItem, getItem, removeItem];

  //#endregion
}

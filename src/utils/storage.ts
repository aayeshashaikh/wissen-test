export const clearStorage = () => {
  localStorage.clear();
  sessionStorage.clear();
};

// Local storage utilsy
export const getLocalStorage = (key: string) => JSON.parse(localStorage.getItem(key) as string);

export const setLocalStorage = (key: string, value: object | string | number | boolean) =>
  localStorage.setItem(key, JSON.stringify(value));

export const removeLocalStorage = (key: string) => localStorage.removeItem(key);

export const clearLocalStorage = () => localStorage.clear();

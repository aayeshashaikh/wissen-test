import { clearStorage, getLocalStorage, removeLocalStorage, setLocalStorage } from './storage';

const keys = {
  TOKEN: 'swatToken',
  IS_AUTH: 'isAuthenticated',
};

export default keys;

export const setToken = (token: string) => setLocalStorage(keys.TOKEN, token);

export const getToken = (): string => getLocalStorage(keys.TOKEN);

export const setAuth = () => setLocalStorage(keys.IS_AUTH, true);

export const getAuth = () => getLocalStorage(keys.IS_AUTH);

export const removeAuth = () => removeLocalStorage(keys.IS_AUTH);

export const logout = () => {
  clearStorage();
};

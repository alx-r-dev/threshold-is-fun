// must convert data types to JSON string for localstorage
class LocalStorage {
  static getLocalStorage(key: string) {
    const item = localStorage.getItem(key);
    if (item === "undefined" || item === null) {
      return "";
    }
    return JSON.parse(item);
  }

  static setLocalStorage<T>(key: string, item: T) {
    return localStorage.setItem(key, JSON.stringify(item));
  }

  static removeLocalStorageItem(key: string) {
    return localStorage.removeItem(key);
  }

  static clearLocalStorage() {
    return localStorage.clear();
  }
}

export default LocalStorage;

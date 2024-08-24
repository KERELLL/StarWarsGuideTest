export const storage = {
  set: (key: string, data: any) => {
    try {
      window.localStorage[key] = JSON.stringify(data);
      return true;
    } catch (err) {
      return undefined;
    }
  },
  get: (key: string) => {
    try {
      return JSON.parse(window.localStorage[key]);
    } catch (err) {
      return undefined;
    }
  },
  remove: (key: string) => {
    try {
      return window.localStorage.removeItem(key);
    } catch (err) {
      return undefined;
    }
  },
};

export const decodeBase64Id = (base64Id: string): string => {
  const decodedString = atob(base64Id);
  const idParts = decodedString.split(":");
  return idParts[1];
};

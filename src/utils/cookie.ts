export const getLocaleStorage = (name: string) => {
  return localStorage.getItem(name);
};

export const setLocaleStorage = (name: string, values: string) => {
  localStorage.setItem(name, values);
};

export const removeLocaleStorage = (name: string) => {
  localStorage.removeItem(name);
};

export const getSessionStorage = (name: string) => {
  return sessionStorage.getItem(name);
};

export const setSessionStorage = (name: string, values: string) => {
  sessionStorage.setItem(name, values);
};

export const removeSessionStorage = (name: string | any[]) => {
  if (Array.isArray(name)) {
    for (const i of name) {
      sessionStorage.removeItem(i);
    }
  } else {
    sessionStorage.removeItem(name);
  }
};

//设置cookie
export const setCookie = (cName: any, cValue: any, exDays: any) => {
  const day: any = new Date();
  day.setTime(day.getTime() + exDays * 24 * 60 * 60 * 1000);
  const expires = `expires=${day.toGMTString}`;
  document.cookie = `${cName}=${cValue};expires=${expires}`;
};

// getCookie
export const getCookie = (cName: any) => {
  const storeName = localStorage.getItem(cName);
  if (storeName) {
    return storeName;
  }
  const name = cName + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      const cookieValue = c.substring(name.length, c.length);
      localStorage.setItem(cName, cookieValue);
      return cookieValue;
    }
  }
  return '';
};

//清除cookie
export const clearCookie = (name: any) => {
  removeLocaleStorage(name);
  setCookie(name, '', -1);
};

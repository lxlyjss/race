export const getCache = name => {
  if(!name) return;
  return window.localStorage.getItem(name);
};
export const setCache = (name, content) => {
  if(!name) return;
  if(typeof content !== "string") {
    window.localStorage.setItem(name,JSON.stringify(content));
  }
  window.localStorage.setItem(name,content);
};
export const removeCache = (name) => {
  if(!name) return;
  window.sessionStorage.removeItem(name);
};
export const getLocalCache = name => {
  if(!name) return;
  return window.localStorage.getItem(name);
};
export const setLocalCache = (name, content) => {
  if(!name) return;
  if(typeof content !== "string") {
    window.localStorage.setItem(name,JSON.stringify(content));
  }
};
export const removeLocalCache = name => {
  if(!name) return;
  window.localStorage.removeItem(name);
};
